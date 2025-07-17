import React from 'react';
export const GlassCard = ({ children, className = '' }) => {
  return (
    <div className={`glass p-6 rounded-2xl shadow-lg ${className}`}>
      {children}
    </div>
  );
};