"use client";

import { Card, Button } from "@radix-ui/themes";
import React from "react";
import {
  CardHeader,
  CardTitle,
  CardContent,
} from "~~/components/ui/card";
import { Coins, Play, Info, Star, Shield, Trophy } from "lucide-react";

export default function GameInfoPage() {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Full-Width Game Info */}
      <div className="w-full flex flex-col justify-start relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-1/2 right-1/4"></div>
          <div className="absolute w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-1/4 left-1/3"></div>
        </div>

        <Card className="w-full max-w-3xl mx-auto bg-gray-800/80 backdrop-blur-sm border-2 border-blue-500 shadow-lg shadow-blue-500/20 relative z-10 mt-12">
          <CardHeader className="border-b border-gray-700">
            <CardTitle className="text-3xl font-bold text-center text-blue-400">
              Game Info
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-6 space-y-6">
            {/* Game Overview */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-blue-300">
                Overview
              </h2>
              <p className="text-base text-gray-300">
                Dive into the thrilling world of blockchain gaming with our new title! This game combines skill-based gameplay with the latest advancements in Web3 technology. Earn, trade, and stake your way to victory in a decentralized ecosystem powered by StarkNet. 
              </p>
            </div>

            {/* Features Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-blue-300">
                Features
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  <Coins className="inline-block w-5 h-5 text-yellow-400 mr-2" />
                  Earn coins and exchange them for crypto-backed assets.
                </li>
                <li>
                  <Star className="inline-block w-5 h-5 text-orange-400 mr-2" />
                  Exclusive NFTs and rewards for top players.
                </li>
                <li>
                  <Play className="inline-block w-5 h-5 text-green-400 mr-2" />
                  Real-time multiplayer battles with zero-latency blockchain integration.
                </li>
                <li>
                  <Shield className="inline-block w-5 h-5 text-purple-400 mr-2" />
                  Decentralized data security and asset ownership.
                </li>
                <li>
                  <Trophy className="inline-block w-5 h-5 text-gold-400 mr-2" />
                  Climb the leaderboards and earn staking bonuses.
                </li>
              </ul>
            </div>

            {/* Objectives Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-blue-300">
                Objectives
              </h2>
              <p className="text-base text-gray-300">
                Outplay your opponents and collect valuable in-game tokens that can be converted to real-world crypto assets. Master your skills, develop strategies, and become a legend in the blockchain gaming space.
              </p>
            </div>

            {/* Rules Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-blue-300">
                Rules
              </h2>
              <ul className="list-decimal list-inside space-y-2 text-gray-300">
                <li>
                  Matches are played one-on-one, and the objective is to score more goals than your opponent within the time limit.
                </li>
                <li>
                  Use power-ups strategically to gain an advantage.
                </li>
                <li>
                  Each character has unique abilities—choose one that matches your play style.
                </li>
                <li>
                  Fouls, such as hitting your opponent excessively, will result in penalties.
                </li>
                <li>
                  Victory earns you crypto rewards and experience points to level up your character.
                </li>
              </ul>
            </div>

            {/* Blockchain and Crypto Integration Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-blue-300">
                Blockchain and Crypto Integration
              </h2>
              <p className="text-base text-gray-300">
                Powered by StarkNet, our game offers unparalleled speed and scalability for a seamless gaming experience. All in-game assets are represented as NFTs, ensuring true ownership and tradability. Leverage smart contracts to automate trades and engage with a decentralized economy directly within the game.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}