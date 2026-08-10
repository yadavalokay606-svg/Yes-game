import React from 'react';

export default function Card({title, children, className=''}){
  return (
    <div className={`p-4 rounded-lg shadow-sm bg-white ${className}`}>
      {title && <div className="mb-3 text-sm font-medium text-slate-700">{title}</div>}
      <div>{children}</div>
    </div>
  );
}
