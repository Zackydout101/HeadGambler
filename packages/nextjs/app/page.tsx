"use client";
import Link from "next/link";
import Image from "next/image";
import { ConnectedAddress } from "~~/components/ConnectedAddress";
import { useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "~~/components/ui/card";
import { Button } from "~~/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "~~/components/ui/avatar";
import { Wallet, Coins, Play, TrendingUp, TrendingDown } from "lucide-react";
import WinLossGraph from "~~/components/win-loss-graph";
import { Unity, useUnityContext } from "react-unity-webgl";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            {/* Welcome Header */}
            <div className="text-center mb-16">
                <h1>
                    <span className="block text-4xl md:text-6xl mb-4">Welcome to</span>
                    <span className="block text-6xl md:text-8xl font-bold">
                        Block Ballerz
                    </span>
                </h1>
                <ConnectedAddress />
            </div>

            {/* Buttons */}
            <div className="flex space-x-8">
                <Button 
                    as={Link} 
                    href="/info" 
                    className="px-12 py-6 text-2xl md:text-3xl font-semibold rounded-xl bg-gray-700 hover:bg-gray-600 text-white"
                >
                    More Info
                </Button>
                <Button 
                    as={Link} 
                    href="/play" 
                    className="px-12 py-6 text-2xl md:text-3xl font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white"
                >
                    Play
                </Button>
            </div>
        </div>
    );
};

export default Home;
