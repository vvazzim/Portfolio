import React, { useMemo, useState, useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

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
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProject = useCallback((projectData) => {
    setSelectedProject((prev) => (prev?.id === projectData?.id ? null : projectData));
  }, []);

  // Construct initial nodes
  const initialNodes = useMemo(() => {
    const nodes = [
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
      nodes.push({
        id: proj.id,
        type: 'projectNode',
        position: { x: 570, y: startY + idx * verticalSpacing },
        data: {
          ...proj,
          onSelect: handleSelectProject,
          isExpanded: selectedProject?.id === proj.id,
        },
      });
    });

    return nodes;
  }, [handleSelectProject, selectedProject]);

  // Construct edges connecting Root -> Branch -> Projects
  const initialEdges = useMemo(() => {
    const edges = [
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
      edges.push({
        id: `edge-mldl-${proj.id}`,
        source: 'branch-mldl',
        target: proj.id,
        type: 'smoothstep',
        animated: selectedProject?.id === proj.id,
        style: {
          stroke: selectedProject?.id === proj.id ? '#f13024' : '#a855f7',
          strokeWidth: selectedProject?.id === proj.id ? 2.5 : 1.5,
          opacity: 0.85,
        },
      });
    });

    return edges;
  }, [selectedProject]);

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  // Keep node expanded state synced
  React.useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.type === 'projectNode') {
          return {
            ...node,
            data: {
              ...node.data,
              isExpanded: selectedProject?.id === node.id,
            },
          };
        }
        return node;
      })
    );
  }, [selectedProject]);

  return (
    <div className="w-full h-[620px] rounded-2xl overflow-hidden border border-white/10 bg-[#0d0e1b]/80 shadow-2xl relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
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
