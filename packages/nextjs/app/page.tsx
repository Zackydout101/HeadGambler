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
import { CustomConnectPlayButton } from "~~/components/scaffold-stark/CustomConnectPlayButton";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            {/* Welcome Header */}
            <div className="text-center mb-16">
                <h1>
                    <span className="block text-4xl md:text-6xl mb-4">Welcome to</span>
                    <span className="block text-6xl md:text-8xl font-bold">
                        Blockchain Ballerz
                    </span>
                </h1>
                <ConnectedAddress />
            </div>

            {/* Buttons */}
            <div className="flex space-x-8">
                <Button 
                    as={Link} 
                    href="/info" 
                    className="rounded-[18px]  btn-sm font-bold px-8 bg-btn-wallet py-3 cursor-pointer mt-[-7px]"
                >
                    More Info
                </Button>
                <CustomConnectPlayButton/>
            </div>
        </div>
    );
};

export default Home;
