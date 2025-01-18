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
        <div className="">
            <div className="px-5">
                <h1 className="text-center">
                    <span className="block text-2xl mb-2">Welcome to</span>
                    <span className="block text-4xl font-bold">
                        Scaffold-Stark 2
                    </span>
                </h1>
                <ConnectedAddress />
            </div>
        </div>
    );
};

export default Home;
