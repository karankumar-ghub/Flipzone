import React from 'react';
import { CheckCircle, X } from 'lucide-react';

const Toast = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed bottom-8 right-8 z-[100] animate-bounce-in">
      <div className="bg-gray-900 border border-cyan-500 text-white px-6 py-4 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center gap-3">
        <div className="bg-cyan-500/20 p-2 rounded-full">
          <CheckCircle size={20} className="text-cyan-400" />
        </div>
        <div>
          <h4 className="font-bold text-sm">Success</h4>
          <p className="text-xs text-gray-400">{message}</p>
        </div>
        <button onClick={onClose} className="ml-4 text-gray-500 hover:text-white">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default Toast;