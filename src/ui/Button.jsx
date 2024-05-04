import React from 'react';

export default function Button({ children, type, onClick }) {
  if (type === 'primary')
    return (
      <button
        className="mt-2 w-full rounded border-2 bg-emerald-600 p-2 text-gray-100 duration-500 hover:border-emerald-600 hover:bg-transparent hover:text-emerald-600"
        onClick={onClick}
      >
        {children}
      </button>
    );
  return <button>{children}</button>;
}
