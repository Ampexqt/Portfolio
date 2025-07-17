import React from 'react';
export const Button = ({ children, primary = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-medium flex items-center justify-center
        transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${primary
          ? 'bg-[#7DD6C0] text-[#161618] hover:bg-[#5fcab0] hover:shadow-md hover:scale-[1.02]'
          : 'bg-transparent text-[#F2F2E9] border border-[rgba(255,255,255,0.15)] hover:text-[#7DD6C0] hover:border-[#7DD6C0] hover:scale-[1.02]'}
      `}
    >
      {children}
    </button>
  );
};