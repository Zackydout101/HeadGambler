"use client";
import { Card, Avatar, Button } from "@radix-ui/themes";
import React from "react";
import { useUnityContext, Unity } from "react-unity-webgl";
import { AvatarImage, AvatarFallback } from "~~/components/ui/avatar";
import { CardHeader, CardTitle, CardContent } from "~~/components/ui/card";
import WinLossGraph from "~~/components/win-loss-graph";
import { Wallet, Coins, Play, TrendingUp, TrendingDown } from "lucide-react";

export default function page() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/Build/realthing.loader.js",
        dataUrl: "/Build/realthing.data",
        frameworkUrl: "/Build/realthing.framework.js",
        codeUrl: "/Build/realthing.wasm",
    });
    return (
        <div className="flex h-screen">
            {/* Right Panel: Unity Game */}
            <div className="flex-1 relative">
                <Unity
                    unityProvider={unityProvider}
                    style={{ width: "110em", height: "50em" }}
                />
            </div>
        </div>
    );
}
