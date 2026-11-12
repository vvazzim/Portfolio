import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { FaLayerGroup } from 'react-icons/fa';

const RootNode = ({ data }) => {
  return (
    <div className="relative group">
      <div className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-accent to-[#d0261a] text-white shadow-2xl shadow-accent/40 border-2 border-white/30 flex items-center gap-3 backdrop-blur-md">
        <div className="p-2 rounded-xl bg-white/20 text-white">
          <FaLayerGroup className="text-base" />
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-widest text-white/80 font-mono block">
            Portfolio
          </span>
          <span className="text-sm font-extrabold tracking-wider">
            {data?.label || 'MY WORK'}
          </span>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        className="!w-3 !h-3 !bg-accent !border-2 !border-white"
      />
    </div>
  );
};

export default RootNode;
