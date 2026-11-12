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
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const handleSelectProject = useCallback((projectData) => {
    setSelectedProjectId((prev) => (prev === projectData?.id ? null : projectData?.id));
  }, []);

  const activeId = selectedProjectId || hoveredProjectId;

  // Compute nodes with clean vertical spacing (190px) and dynamic zIndex
  const nodes = useMemo(() => {
    const verticalSpacing = 190;
    const startY = 30;
    const centerY = startY + 2 * verticalSpacing; // Center node index 2 (410px)

    const list = [
      // 1. Root Node "MY WORK" (centré verticalement)
      {
        id: 'root-work',
        type: 'rootNode',
        position: { x: 30, y: centerY },
        data: { label: 'MY WORK' },
        zIndex: 5,
      },
      // 2. Branch Node "ML / DL" (centré verticalement)
      {
        id: 'branch-mldl',
        type: 'branchNode',
        position: { x: 280, y: centerY },
        data: { label: 'ML / DL' },
        zIndex: 6,
      },
    ];

    // 3. Project Nodes avec espacement vertical spacieux et zIndex dynamique
    mlDlProjects.forEach((proj, idx) => {
      const isExpanded = activeId === proj.id;
      list.push({
        id: proj.id,
        type: 'projectNode',
        position: { x: 550, y: startY + idx * verticalSpacing },
        zIndex: isExpanded ? 1000 : 10,
        data: {
          ...proj,
          onSelect: handleSelectProject,
          onHover: setHoveredProjectId,
          isExpanded: isExpanded,
        },
      });
    });

    return list;
  }, [activeId, handleSelectProject]);

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
      const isSelected = activeId === proj.id;
      list.push({
        id: `edge-mldl-${proj.id}`,
        source: 'branch-mldl',
        target: proj.id,
        type: 'smoothstep',
        animated: isSelected,
        style: {
          stroke: isSelected ? '#f13024' : '#a855f7',
          strokeWidth: isSelected ? 3 : 1.5,
          opacity: isSelected ? 1 : 0.7,
        },
      });
    });

    return list;
  }, [activeId]);

  return (
    <div className="w-full h-[760px] rounded-2xl overflow-hidden border border-white/10 bg-[#0d0e1b]/90 shadow-2xl relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={true}
        fitView
        fitViewOptions={{ padding: 0.18 }}
        minZoom={0.35}
        maxZoom={1.5}
        proOptions={{ hideAttribution: true }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={24}
          size={1.2}
          color="#f13024"
          className="opacity-20"
        />
        <Controls className="!bg-[#151628] !border-white/10 !fill-white !shadow-lg rounded-xl overflow-hidden" />
      </ReactFlow>

      {/* Guide utilisateur visuel */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-xs text-white/80 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
        <span>Survolez une bulle projet : elle passe au premier plan avec sa fiche détaillée</span>
      </div>
    </div>
  );
};

export default WorkTreeCanvas;
