import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { FaBrain } from 'react-icons/fa';

const BranchNode = ({ data }) => {
  return (
    <div className="relative group">
      <Handle
        type="target"
        position={Position.Left}
        className="!w-3 !h-3 !bg-purple-500 !border-2 !border-white"
      />
      <div className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-700/80 via-purple-600/70 to-accent/80 text-white shadow-xl shadow-purple-900/40 border border-purple-400/40 backdrop-blur-md flex items-center gap-2.5">
        <div className="p-1.5 rounded-lg bg-black/30 text-purple-200">
          <FaBrain className="text-sm" />
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-wider text-purple-200 font-mono block">
            Pôle Spécialisé
          </span>
          <span className="text-sm font-bold tracking-wide">
            {data?.label || 'ML / DL'}
          </span>
        </div>
        <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/20 text-white/90">
          5
        </span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        className="!w-3 !h-3 !bg-accent !border-2 !border-white"
      />
    </div>
  );
};

export default BranchNode;
