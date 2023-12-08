import React from 'react';
import { FaFire } from 'react-icons/fa';

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start aling-baseline">
      <FaFire
        size={20}
        className={`pr-1 ${priority > 0 ? 'text-red-400' : 'text-slate-400'}`}
      />
      <FaFire
        size={20}
        className={`pr-1 ${priority > 1 ? 'text-red-400' : 'text-slate-400'}`}
      />
      <FaFire
        size={20}
        className={`pr-1 ${priority > 2 ? 'text-red-400' : 'text-slate-400'}`}
      />
      <FaFire
        size={20}
        className={`pr-1 ${priority > 3 ? 'text-red-400' : 'text-slate-400'}`}
      />
      <FaFire
        size={20}
        className={`pr-1 ${priority > 4 ? 'text-red-400' : 'text-slate-400'}`}
      />
    </div>
  );
};

export default PriorityDisplay;
