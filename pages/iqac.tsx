// pages/iqac.tsx
"use client";
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import TableInputComponent from '../components/table';
import { Loader, LoaderPinwheel, LucidePersonStanding } from 'lucide-react';

const IQAC: React.FC = () => {
  // const { user, loading } = useAuth();

  // if (loading) {

  //   return <div className='flex justify-center'><Loader
  //   className='animate-spin mt-56'
  //   /></div>// Show a loading indicator while loading
  // }

  // if (!user) {
  //   return <div>Unauthorized</div>; // Show an unauthorized message
  // }

  return (
    <div className='bg-white'>
      <h1>IQAC Members</h1>
      <TableInputComponent />
    </div>
  );
};

export default IQAC;