"use client"
import Link from "next/link";
import Image from "next/image";
import { ConnectedAddress } from "~~/components/ConnectedAddress";
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/card"
import { Button } from "~~/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "~~/components/ui/avatar"
import { Wallet, Coins, Play, TrendingUp, TrendingDown } from 'lucide-react'
import WinLossGraph from  "~~/components/win-loss-graph"



const Home = () => {
  return (
    <div className="">
      <div className="px-5">
        <h1 className="text-center">
          <span className="block text-2xl mb-2">Welcome to</span>
          <span className="block text-4xl font-bold">Scaffold-Stark 2</span>
        </h1>
        <ConnectedAddress />
        <p className="text-center text-lg">
          Edit your smart contract{" "}
          <code className="bg-underline italic text-base font-bold max-w-full break-words break-all inline-block">
            YourContract.cairo
          </code>{" "}
          in{" "}
          <code className="bg-underline italic text-base font-bold max-w-full break-words break-all inline-block">
            packages/snfoundry/contracts/src
          </code>
        </p>
      </div>

      <div className="flex justify-start">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-1/2 right-1/4"></div>
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-1/4 left-1/3"></div>
      </div>

      <Card className="w-full max-w-md bg-gray-800/80 backdrop-blur-sm border-2 border-purple-500 shadow-lg shadow-purple-500/20 relative z-10">
        <CardHeader className="border-b border-gray-700">
          <CardTitle className="text-2xl font-bold text-center text-purple-400">Crypto Gamer Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="mt-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12 border-2 border-purple-500">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Player Avatar" />
                <AvatarFallback>CG</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Crypto Gamer</p>
                <p className="text-xs text-gray-400">Level 42</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">Balance</p>
              <p className="text-2xl font-bold text-green-400">${}</p>
            </div>
          </div>

          <div className="pt-4 flex space-x-4">
            <Button 
              
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Wallet className="w-5 h-5" />
             
            </Button>
            <Button 
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Play Now</span>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <Card className="bg-gray-700/50 border-purple-500 hover:border-purple-400 transition-colors">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <Coins className="w-8 h-8 text-yellow-400 mb-2" />
                <p className="text-sm font-medium">Total Coins</p>
                <p className="text-lg font-bold text-yellow-400">42,000</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700/50 border-purple-500 hover:border-purple-400 transition-colors">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <svg className="w-8 h-8 text-blue-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p className="text-sm font-medium">Items</p>
                <p className="text-lg font-bold text-blue-400">15</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-700/50 border-purple-500">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium">Wins/Losses</p>
                <div className="flex space-x-2">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                    <span className="text-xs text-green-400">60%</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingDown className="w-4 h-4 text-red-400 mr-1" />
                    <span className="text-xs text-red-400">40%</span>
                  </div>
                </div>
              </div>
              <WinLossGraph />
            </CardContent>
          </Card>
        </CardContent>
      </Card>



      </div>
    


    </div>
  );
};

export default Home;
