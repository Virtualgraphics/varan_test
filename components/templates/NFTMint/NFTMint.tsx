
import {useState } from 'react'
import type { NextPage } from "next";
import { FC, useEffect } from 'react';
import Image from 'next/image'
import React from 'react';
import {MediaRenderer, useContract, useContractMetadata, Web3Button} from "@thirdweb-dev/react";



const NFTMint = () => {
 
  const { contract: tokenDropContract} = useContract("0xd23342d614a1ff1d7bc84b9041C8615532D55C6D");
  const [amountToClaim, setAmountToClaim] = useState("");
  
      return (


        <div className="justify-center px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:pt-20">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          
  
            <Image
            className="m-auto w-144 py-2"
            src="/assets/varan_logoTYPE.svg"
            alt="Star Divider"
            width={1260}
            height={750}
          />
        

          
            <hr className="w-full  border-yellow-300" />
            <p className="text-base font-semibold tracking-wide text-yellow-300 lg:text-2xl  md:text-lg sm:px-4 py-8 font-Acme">
           Mint your SAVAGE VARAN NFT and go on the hunt for the treasure of the Calypso. 
            </p>

<div className="flex justify-center ">




<div className="bg-green-900/30 rounded-2xl w-96 drop-shadow-lg ">


<Image
              className="p-10 shadow-3xl"
              src="/assets/varan_collection_image.jpg"
              alt="Stardust"
              width={1000}
              height={1000}
            />

<h1 className="text-yellow-300  text-xl font-Skranji">SAVAGE VARAN Treasure Hunt</h1>

<h1 className="text-yellow-300  text-lg font-Acme">Mint Date TBA</h1>
  
<div className="mt-5 mb-7 max-w-sm justify-items-center">

          
    </div>
   
   
    <div className='w-60 flex items-center justify-center m-auto pb-12'>
    <Web3Button 
        
         
          contractAddress="0x94B0E73c4328A53ccc2CdeDbEeB2aF625984Af90"
          action={(contract) => contract.erc20.claim(amountToClaim)}
          onSuccess={() => alert("Claimed!")}
          onError={(err) => alert(err)}
        >
          Claim NFT
        
          </Web3Button></div>
         </div>
              </div>
</div>

<h1 className="text-yellow-300  text-2xl font-Acme text-center mt-8">Mint Tools for the Treasure Hunt</h1>
<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 max-w-3xl justify-items-center mx-auto mt-4">

<div>
<Image
              className="rounded-2xl h-48 w-48"
              src="/assets/tool_hammer.jpg"
              alt="Hammer"
              width={1000}
              height={1000}
            />

</div>

<div>
<Image
              className="rounded-2xl h-48 w-48"
              src="/assets/tool_pickaxe.jpg"
              alt="Pickaxe"
              width={1000}
              height={1000}
            />

</div>

<div>
<Image
              className="rounded-2xl h-48 w-48"
              src="/assets/tool_shovel.jpg"
              alt="Shovel"
              width={1000}
              height={1000}
            />

</div>


</div>
<h1 className="text-yellow-300  text-2xl font-Acme text-center mt-8">Mint Weapons for the Treasure Hunt</h1>

<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 max-w-3xl justify-items-center mx-auto mt-4">

<div>
<Image
              className="rounded-2xl h-48 w-48"
              src="/assets/weapon_axe.jpg"
              alt="Hammer"
              width={1000}
              height={1000}
            />

</div>

<div>
<Image
              className="rounded-2xl h-48 w-48"
              src="/assets/weapon_gun.jpg"
              alt="Pickaxe"
              width={1000}
              height={1000}
            />

</div>

<div>
<Image
              className="rounded-2xl h-48 w-48"
              src="/assets/weapon_machete.jpg"
              alt="Shovel"
              width={1000}
              height={1000}
            />

</div>


</div>

 
<div className="pb-12  justify-items-center">

<div className=" pt-14 m-auto  justify-center">
<h1 className=" text-blue-800 text-2xl text-center  font-Skranji">
              Use your SAVAGE VARAN NFTs for the following cool things:
            </h1></div>

      <div className="w-4/5 m-auto grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3 mt-10 sm:grid-cols-2">
        <div className="duration-300 transform bg-green-950/30 border-l-4 border-deep-purple-accent-900 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 leading-5 text-yellow-200 font-Acme">Earn rewards in the RPG</h6>
            <p className="text-sm text-white">
              Get rewards for missions and quests successfully accomplished in the Stargazer RPG and trade tokens for in-game NFTs.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-green-950/30 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2  leading-5 text-yellow-200 font-Acme">Power up your Stargate</h6>
            <p className="text-sm text-white">
              Use the Stardust tokens to claim cosmic energy sources for your Stargate and get more STAR as a reward.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-green-950/30 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 leading-5 text-yellow-200 font-Acme">Vote for your stories
              
            </h6>
            <p className="text-sm text-white">
              Use the tokens to participate in the anime and webtoons and get rewarded for a story path well-chosen.
            </p>
            
          </div>
        </div>
        </div>
<div className="py-12 w-full justify-items-center mx-auto">

  <h1 className="text-lg text-center text-blue-900 font-Jost py-2 font-semibold">NFT contract address on Bscscan:</h1>
            <p className="text-base text-center text-blue-900 font-Jost px-2">
              Savage Varan Tribe Collection: TBA
            </p>
            </div> 
      
 </div>
 
 </div>

      );
    };

 
  export default NFTMint;