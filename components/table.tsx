// components/table.tsx
"use client";
import React, { useState } from 'react';

const TableInputComponent: React.FC = () => {
  const [data, setData] = useState<string[][]>(Array(10).fill(Array(2).fill('')));

  const handleInputChange = (rowIndex: number, colIndex: number, value: string) => {
    const newData = data.map((row, rIdx) =>
      row.map((cell, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? value : cell))
    );
    setData(newData);
  };

  return (
    <div className='bg-white text-black h-screen'>
      <div className='bg-white pb-10'>
      <h2 className='font-extrabold text-4xl text-center'>IQAC Members</h2> <br /> <br />
      <table className='border w-[90%] m-auto'>
        <thead>
            <tr>
                <th>Members:</th>
                <th>Designation:</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Dr. Debajit N. Sarkar</td>
                <td>Chairman</td>
            </tr>
            <tr>
                <td>Mr. Vijay Parmar </td>
                <td>Management Representative</td>
            </tr>
            <tr>
                <td>Dr. M. Z. Farooqui</td>
                <td>Outside Expert – Member</td>
            </tr>
            <tr>
                <td>Dr. Moushumi Dutta </td>
                <td>Outside Expert – Member</td>
            </tr>
            <tr>
                <td>Dr. Rajendra Shinde </td>
                <td>Outside Expert – Member</td>
            </tr>
            <tr>
                <td>Dr. Smita Shukla</td>
                <td>Outside Expert – Member</td>
            </tr>
            <tr>
                <td>Dr. Parita Desai</td>
                <td>Convener</td>
            </tr>
            <tr>
                <td>Dr.Samya Shinde</td>
                <td>Member</td>
            </tr>
            <tr>
                <td>Dr. Hrishikesh Wandrekar</td>
                <td>Member</td>
            </tr>
            <tr>
                <td>Dr. Preeti Vaswani </td>
                <td>Member</td>
            </tr>
            <tr>
                <td>Dr.Samya Shinde</td>
                <td>Member</td>
            </tr>
            <tr>
                <td>Ms. Pooja Yadav</td>
                <td>Member</td>
            </tr>
            <tr>
                <td>Mr. Rahul Dandekar</td>
                <td>Member</td>
            </tr>
            <tr>
                <td>Ms. Vaishali Pandya </td>
                <td>Member</td>
            </tr>
            <tr>
                <td>Ms. Divya Kanchan</td>
                <td>Member</td>
            </tr>
            <tr>
                <td>Ms. Prajakta Joshi </td>
                <td>Member</td>
            </tr>
            <tr>
                <td>Ms. Shalmali Colaco</td>
                <td>Member</td>
            </tr>
            <tr>
                <td>Ms. Rupal Kore Member</td>
                <td>Member</td>
            </tr>
            <tr>
                <td>Ms. Tina Mestry</td>
                <td>Student Member</td>
            </tr>
            <tr>
                <td>Ms. Muskan J. Vora</td>
                <td> Student Member</td>
            </tr>
            <tr>
                <td>Ms. Sabrina Sorosh</td>
                <td> Student Member</td>
            </tr>
        </tbody>
    </table>
      <style jsx>{`
        th, td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        th {
          background-color: #f2f2f2;
        }
      `}</style>
      </div>
      <footer className='bg-purple-600 pt-32'>

    </footer>
    </div>
    
  );
};

export default TableInputComponent;