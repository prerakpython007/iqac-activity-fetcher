"use client";
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { LogIn, LogOut } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import DropDown from './DropDown';
import LoginForm from '../components/loginForm';
import DropDown2 from './DropDown2';

const Navbar: React.FC = () => {
  const { user } = useAuth();
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.reload(); // Force reload to update state
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="bg-purple-600 bg-[] text-white p-4 flex justify-between items-center">
      <Link href="/homePage">
        <Image src='/logo_LSRC.png' alt='img' width={400} className='hidden lg:block' height={150}/>
      </Link>
      <div className="flex items-center">
        <Image src='/iqac_logo.png' width={100} height={100} alt='iqac logo'/>
        <Link href="/iqac" legacyBehavior>
          <a className="px-4 lg:text-lg text-xs hover:text-gray-200">IQAC Members</a>
        </Link>
        {user && (
          <>
            <DropDown options={[
              { label: 'Events', href: 'https://docs.google.com/forms/d/1xN8Ac7o2jomijPh5oxitizoF-H4NENml39bY7Cs4SKc/edit?usp=drivesdk' },
              { label: 'Research', href: 'https://forms.gle/S4MUXhxTgyu1DDDB7' },
              { label: 'MOU', href: 'https://forms.gle/VvAjZgDDdWHgKzjP8' },
              { label: 'ADD-ON Course', href: 'https://forms.gle/fwrW65UMnepyPSTr9' },
              { label: 'E-Content', href: 'https://forms.gle/YMLW62Ke523GfcHi8' },
              { label: 'Library', href: 'https://forms.gle/AEk7AQq1L5k7TUyk7' },
              { label: 'Placement', href: 'https://forms.gle/GjyaXZ1jC1pSrfe46' },
              { label: 'Student`s Achievements', href: 'https://forms.gle/ezhMsgrTYJTqiTYX9' },
              { label: 'Teacher`s Award', href: 'https://forms.gle/1wmrMm4Nv3wATrNf9' },
              { label: 'Teacher`s Book Pubication', href: 'https://forms.gle/5YpbREQg5mNh3vV3A' },
              { label: 'Teacher`s FDP', href: 'https://forms.gle/G1jDNRZ7sYJwQqC48' },
              { label: 'Teacher`s invited as expert', href: 'https://forms.gle/TFmhx5ifPjdUPghW6' },
              { label: 'Teacher`s Profile', href: 'https://forms.gle/u6mZfzDE8A3UV1Hn9' },
              { label: 'Teacher`s Research Project', href: 'https://forms.gle/gs3eDA1x7CsubYeJ9' },
              { label: 'Teacher`s Service Record', href: 'https://forms.gle/eTYUWinTdbs4rutU7' },
              // ... other options
            ]} />
            <DropDown2
              options={[
                { label: 'Events', href: 'https://docs.google.com/spreadsheets/d/1E6Da1xb4kMGJ7LyY13kUybBGogdGoX2TSQu46ktsgIo/edit?gid=1483705907#gid=1483705907' },
                { label: 'Research', href: '' },
                { label: 'MOU', href: '' },
                { label: 'ADD-ON Course', href: '' },
                { label: 'E-Content', href: '' },
                { label: 'Library', href: '' },
                { label: 'Placement', href: '' },
                { label: 'Student`s Achievements', href: '' },
                { label: 'Teacher`s Award', href: '' },
                { label: 'Teacher`s Book Pubication', href: '' },
                { label: 'Teacher`s FDP', href: '' },
                { label: 'Teacher`s invited as expert', href: '' },
                { label: 'Teacher`s Profile', href: '' },
                { label: 'Teacher`s Research Project', href: '' },
                { label: 'Teacher`s Service Record', href: '' },
                // ... other options
              ]}
            />
          </>
        )}
        {user ? (
          <button onClick={handleLogout} className='py-1 px-2 flex text-xs lg:text-lg bg-white bg-opacity-20 rounded-lg hover:bg-opacity-50 transition'>
            Log-out <LogOut size={25} className='py-1 ' />
          </button>
        ) : (
          <button onClick={() => setShowLoginForm(true)} className='py-1 px-2 flex text-xs lg:text-lg bg-white bg-opacity-20 rounded-lg hover:bg-opacity-50 transition'>
            Login <LogIn size={25} className='py-1'/>
          </button>
        )}
      </div>
      {showLoginForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <LoginForm setShowLoginForm={setShowLoginForm} />
          <button onClick={() => setShowLoginForm(false)} className="absolute top-0 right-0 m-4 text-black">Close</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;