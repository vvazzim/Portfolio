import React, { useMemo, useState, useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  BackgroundVariant,
} from '@xyflow/react';

import RootNode from './RootNode';
import BranchNode from './BranchNode';
import ProjectNode from './ProjectNode';
import { mlDlProjects } from '../../src/data/mlDlProjects';

const nodeTypes = {
  rootNode: RootNode,
  branchNode: BranchNode,
  projectNode: ProjectNode,
};

const WorkTreeCanvas = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleSelectProject = useCallback((projectData) => {
    setSelectedProjectId((prev) => (prev === projectData?.id ? null : projectData?.id));
  }, []);

  // Compute nodes dynamically with exact selection state
  const nodes = useMemo(() => {
    const list = [
      // 1. Root Node
      {
        id: 'root-work',
        type: 'rootNode',
        position: { x: 40, y: 280 },
        data: { label: 'MY WORK' },
      },
      // 2. Branch Node ML / DL
      {
        id: 'branch-mldl',
        type: 'branchNode',
        position: { x: 300, y: 280 },
        data: { label: 'ML / DL' },
      },
    ];

    // 3. Project Nodes connected to ML / DL branch
    const verticalSpacing = 125;
    const startY = 30;

    mlDlProjects.forEach((proj, idx) => {
      list.push({
        id: proj.id,
        type: 'projectNode',
        position: { x: 570, y: startY + idx * verticalSpacing },
        data: {
          ...proj,
          onSelect: handleSelectProject,
          isExpanded: selectedProjectId === proj.id,
        },
      });
    });

    return list;
  }, [handleSelectProject, selectedProjectId]);

  // Compute edges connecting Root -> Branch -> Projects
  const edges = useMemo(() => {
    const list = [
      {
        id: 'edge-root-mldl',
        source: 'root-work',
        target: 'branch-mldl',
        type: 'smoothstep',
        animated: true,
        style: { stroke: '#f13024', strokeWidth: 3 },
      },
    ];

    mlDlProjects.forEach((proj) => {
      const isSelected = selectedProjectId === proj.id;
      list.push({
        id: `edge-mldl-${proj.id}`,
        source: 'branch-mldl',
        target: proj.id,
        type: 'smoothstep',
        animated: isSelected,
        style: {
          stroke: isSelected ? '#f13024' : '#a855f7',
          strokeWidth: isSelected ? 2.5 : 1.5,
          opacity: 0.85,
        },
      });
    });

    return list;
  }, [selectedProjectId]);

  return (
    <div className="w-full h-[620px] rounded-2xl overflow-hidden border border-white/10 bg-[#0d0e1b]/80 shadow-2xl relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={true}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.4}
        maxZoom={1.4}
        proOptions={{ hideAttribution: true }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={1}
          color="#f13024"
          className="opacity-20"
        />
        <Controls className="!bg-[#151628] !border-white/10 !fill-white !shadow-lg rounded-xl overflow-hidden" />
      </ReactFlow>

      {/* Helper hint pill */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs text-white/70 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
        <span>Arborescence interactive : Survolez ou cliquez sur un nœud pour explorer les détails</span>
      </div>
    </div>
  );
};

export default WorkTreeCanvas;
