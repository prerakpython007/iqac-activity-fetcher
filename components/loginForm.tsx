// components/loginForm.tsx
"use client";
import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { LogIn, LogInIcon, LogOut } from 'lucide-react';

interface LoginFormProps {
  setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: React.FC<LoginFormProps> = ({ setShowLoginForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user } = useAuth();

  const handleEmailPasswordLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowLoginForm(false); // Close the form upon successful login
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred during login.");
      }
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setShowLoginForm(false); // Close the form upon successful login
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred during Google login.");
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.reload(); // Force reload to update state
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-screen bg-gray-100">
      <div className="w-full max-w-xs">
        {user ? (
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Log-out <LogOut size={25} className='py-1 ' />
          </button>
        ) : (
          <>
            <form onSubmit={handleEmailPasswordLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              {error && <p className="text-red-500 text-xs italic">{error}</p>}
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none   focus:shadow-outline">Login with Email</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;