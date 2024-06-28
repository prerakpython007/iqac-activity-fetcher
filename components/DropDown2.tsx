// Updated DropDown component to include hrefs in options
"use client";
import React, { useState } from "react";
import Link from 'next/link'; // Import Link from Next.js
import { ChevronDown, ChevronUp } from "lucide-react";

// Update the type of options to reflect the new structure
interface Option {
  label: string;
  href: string;
}

const DropDown2 = ({ options }: { options: Option[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="relative px-3">
      <button className="flex lg:text-lg text-xs items-center" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="mr-1 py-1 ">Report</div>
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isExpanded && (
        <div className="absolute right-4 bg-white mt-2 w-64 border text-purple-900 rounded-md">
          <ul>
            {options.map((option) => (
              <li className="hover:bg-purple-600 cursor-pointer px-1 my-2 hover:text-white" key={option.label}>
                {/* Wrap the option in a Link component */}
                <Link href={option.href} legacyBehavior>
                  <a className="block px-1 my-2 hover:text-white">{option.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    
  );
};

export default DropDown2;