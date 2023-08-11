import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800"
    >
      {children}
    </button>
  );
};

export default Button;
