import React, { useState } from 'react';
import { X, Mail, Lock } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { closeLoginModal, login } from '../store/authSlice';

const LoginModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.auth.isLoginModalOpen);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      dispatch(login({ email, password }));
      setIsLoading(false);
      // Reset form
      setEmail('');
      setPassword('');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={() => dispatch(closeLoginModal())}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-md rounded-[4px] shadow-2xl overflow-hidden animate-bounce-in">
        {/* Header */}
        <div className="bg-(--nav-bg) p-6 text-center relative">
          <button 
            onClick={() => dispatch(closeLoginModal())}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-blue-100 text-sm">Login to access your orders & wishlist</p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-[4px] focus:border-(--accent-cyan) focus:ring-1 focus:ring-(--accent-cyan) outline-none transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-[4px] focus:border-(--accent-cyan) focus:ring-1 focus:ring-(--accent-cyan) outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-(--accent-fuchsia) text-white font-bold py-3 rounded-[4px] hover:brightness-110 transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {isLoading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                'Login Securely'
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            New here? <span className="text-(--accent-cyan) font-bold cursor-pointer hover:underline">Create an account</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;