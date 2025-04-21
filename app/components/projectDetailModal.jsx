import React from 'react';

const projectDetailModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-md shadow-lg max-w-lg w-full">
        <button onClick={onClose} className="absolute top-2 right-2 text-black">X</button>
        {children}
      </div>
    </div>
  );
};

export default projectDetailModal;