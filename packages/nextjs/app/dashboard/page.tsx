"use client";
import { useAccount } from "@starknet-react/core";
import React, { useEffect, useMemo, useState } from "react";
import { Balance, BlockieAvatar } from "~~/components/scaffold-stark";
import { useScaffoldStarkProfile } from "~~/hooks/scaffold-stark/useScaffoldStarkProfile";
import { getChecksumAddress } from "starknet";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
    XAxis,
    Label,
} from "recharts";
import { Card } from "~~/components/ui/card";

const blockieSizeMap = {
    xs: 6,
    sm: 7,
    base: 8,
    lg: 9,
    xl: 10,
    "2xl": 12,
    "3xl": 15,
};

export default function page() {
    const [ensAvatar, setEnsAvatar] = useState<string | null>();
    const connectedAddress = useAccount();

    const address = connectedAddress.address;
    const { data: fetchedProfile, isLoading } =
        useScaffoldStarkProfile(address);

    const checkSumAddress = useMemo(() => {
        if (!address) return undefined;

        if (address.toLowerCase() === "0x") {
            return "0x0";
        }

        return getChecksumAddress(address);
    }, [address]);

    if (!checkSumAddress) {
        return (
            <div className="italic text-base font-bold ">
                Wallet not connected
            </div>
        );
    }

    const pieData = [
        { name: "Wins", value: 70 },
        { name: "Losses", value: 30 },
    ];

    const COLORS = ["#4caf50", "#f44336"]; // Green and red for wins/losses

    return (
        <div className="min-h-screen bg-gradient-to-r  text-white flex flex-col m-10">
            {/* Dashboard Title */}
            <h1 className="text-4xl font-bold">Game Dashboard</h1>
            <div className="flex gap-4 items-center mt-10">
                {/* Pie Chart */}
                <Card className="w-1/3 h-[350px]">
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            >
                                {pieData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    <p className="text-lg break-all w-full text-center">
                        Win/lose Chart
                    </p>
                </Card>

                <Card className="w-2/3 p-4 h-[350px] justify-center  flex flex-col">
                    {/* Account Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <h2 className="text-2xl font-medium">
                                Account Number:
                            </h2>
                            <p className="text-lg break-all">
                                {address || "No Address Connected"}
                            </p>
                        </div>
                    </div>

                    {/* Wallet Balance */}
                    <div className="flex gap-4  items-center ">
                        <h2 className="text-2xl font-medium">
                            Wallet Balance:
                        </h2>
                        <Balance
                            address={address}
                            className="text-lg bg-white/20 rounded-md py-2 px-4"
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
}
