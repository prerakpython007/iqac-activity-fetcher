// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import Navbar from '../components/navbar'; // Adjust the import path as necessary
import { AuthProvider } from '../contexts/AuthContext'; // Adjust the import path as necessary
import '../app/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default MyApp;