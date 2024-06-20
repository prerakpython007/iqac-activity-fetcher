// pages/index.tsx
"use client";

import Navbar from '@/components/navbar';
import StaticInfo from '@/pages/homePage';
import React from 'react';


const Home: React.FC = () => {
  return (
    <div className="h-screen bg-white">
      <Navbar/>
      <StaticInfo />    
    </div>
  );
};

export default Home;