import React, { useState } from 'react';
import Image from 'next/image'
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from 'next/link'


function NavBar() {
 const [isOpen, setIsOpen] = useState(false);

 return (
   <nav className="flex items-center justify-between flex-wrap p-4 border-b border-yellow-100 bg-blue-900">
     <div className="flex items-center flex-shrink mr-6 lg:mr-72">

     <Image
              className=" h-10 w-auto lg:h40 lg:ml-10 sm:w-auto justfy-left"
              src="/assets/varan_logo_40.png"
              alt="Immortal Coil Logo"
              width={329}
              height={42}
            />
     </div>
     <div className="block lg:hidden ">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-white hover:text-black-400 "
       >
         <svg
           className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-md font-Proza lg:flex-grow">

         <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-6  text-yellow-400 hover:text-blue-300 font-Proza text-lg font-Skranji tracking-wider">
           ISLAND
         </Link>
         <Link href="games" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-6  text-yellow-400 hover:text-blue-300 font-Proza text-lg font-Skranji tracking-wider">
           GAMES
         </Link>
         <Link href="webtoon" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-6  text-yellow-400  hover:text-blue-300 font-Proza text-lg font-Skranji tracking-wider">
           WEBTOON
         </Link>
         <Link href="nftmint" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-6  text-yellow-400  hover:text-blue-300 font-Proza text-lg font-Skranji tracking-wider">
           NFTs
         </Link>
         <Link href="token" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-6  text-yellow-400  hover:text-blue-300 font-Proza text-lg font-Skranji tracking-wider">
           TOKENS
         </Link>
         <Link href="marketplace" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-6  text-yellow-400  hover:text-blue-300 font-Proza text-lg  font-Skranji tracking-wider">
           MARKETPLACE
         </Link>
       </div>
       <div className="py-2 mr-12">
       <ConnectWallet />
       </div>
     </div>
   </nav>
 );
}
export default NavBar;