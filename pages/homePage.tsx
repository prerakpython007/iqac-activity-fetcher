// components/StaticInfo.tsx
import DropDown from '@/components/DropDown';
import LoginForm from '@/components/loginForm';
import { useAuth } from '@/contexts/AuthContext';
import { auth } from '@/lib/firebaseConfig';
import { signOut } from 'firebase/auth';
import { Contact, LocateFixedIcon, LocateIcon, LogIn, LogOut, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';




const StaticInfo: React.FC = () => {
  return (
    <div className='bg-white'>
    <div className='text-black w-[90%] py-14  m-auto'>
        
        <div className='bg-purple-600 bg-opacity-15 px-10 py-10 rounded-xl'>
      <h1 className='lg:text-3xl text-xl text-purple-600 font-extrabold'>Introduction:</h1><br />
      <p className='lg:text-2xl lg:leading-10 text-lg leading-7 text-justify'>The Internal Quality Cell (IQC) is a dedicated unit within an institution focused
          on ensuring the seamless execution and rigorous evaluation of both academic
          and administrative activities. The primary goal of the IQC is to maintain and
          enhance the quality of all institutional undertakings, encompassing the entire
          process from conception through to execution and reporting. By
          systematically monitoring and assessing various initiatives, the IQC strives to
            foster a culture of continuous improvement, ensuring that the institution
            consistently meets high standards of performance and effectiveness in all its
            operations.</p> </div> <br /><br />
      {/* Add more static content as needed */}
    </div>
    <div className='text-black w-[90%] m-auto'>
      <h1 className='lg:text-3xl text-xl text-purple-600 font-extrabold'>Vision &amp; Mission:</h1> <br />
      <ul className='list-disc lg:text-2xl text-lg w-[70%] m-auto font-bold lg:leading-[70px] leading-[50px] text-blue-950 '>
        <li>Preserving Quality Culture in Higher Education.</li>
        <li>Institutionalizing and internalizing activities.</li>
        <li>Supporting internal and external sources.</li>
      </ul>
    </div> <br />
    <div className='text-black w-[90%] m-auto'>
        <h1 className='lg:text-3xl text-xl text-purple-600 font-extrabold'>Objectives:</h1><br /> <br />
        <ul className='list-disc lg:text-2xl text-lg w-[70%] m-auto font-bold lg:leading-[70px] leading-[50px] text-blue-950'>
          <li>To Develop conscious, consistent, catalytic action for academic and
          administrative improvement.</li>
          <li>To Promote quality enhancement through internalization of quality culture
          and best practices.</li>
        </ul> <br /> <br />
    </div>
    <footer className='bg-purple-600 pt-10 px-10 pb-6'>
      <div className='grid grid-cols-2 gap-14'>
        <div className=''>
          <h1 className='py-4 font-extrabold text-lg'>L. S. Raheja College of Arts and Commerce</h1>
          <p className='leading-7'>The Sadhana Education Society's L. S. Raheja College of Arts and Commerce is located at a vantage point in Juhu and has virtually become the cornerstone for academic excellence.</p>
        </div>
        <div>
          <h1 className='py-4 font-extrabold text-lg'>Contact Us</h1>
          <p className='flex py-2 '> <LocateFixedIcon className='mx-2'/> Relief Road, Juhu, Santacruz (W), Mumbai-400054</p>
          <p   className='flex  py-2'> <Contact className='mx-2'/> +91-22-2660 9320</p>
          <p  className='flex py-2'> <Mail  className='mx-2' /> Contact Us</p>
        </div>
      </div>
      
    </footer>
    <div className='bg-white'>
        <p className='text-black font-light text-sm justify-end flex px-14 py-2'>WebPage by Prerak</p>
    </div>
    </div>
  );
};

export default StaticInfo;