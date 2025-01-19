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
    BarChart,
    Bar,
    CartesianGrid,
    YAxis,
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

    // Pie Chart Data (Win/Loss Ratio)
    const pieData = [
        { name: "Wins", value: 85 },
        { name: "Losses", value: 15 },
    ];

    const COLORS = ["#4caf50", "#f44336"]; // Green for Wins, Red for Losses

    // Transaction History with detailed amounts and dates
    const transactionHistory = [
        { date: "2025-01-10", amount: 2.5, type: "Deposit", currency: "ETH" },
        { date: "2025-01-12", amount: 1.2, type: "Withdrawal", currency: "ETH" },
        { date: "2025-01-15", amount: 0.8, type: "Deposit", currency: "ETH" },
        { date: "2025-01-17", amount: 3.1, type: "Withdrawal", currency: "ETH" },
    ];

    // Monthly Performance Data (Earnings over several months)
    const barChartData = [
        { name: "Jan 2025", value: 550 },
        { name: "Feb 2025", value: 350 },
        { name: "Mar 2025", value: 650 },
        { name: "Apr 2025", value: 430 },
        { name: "May 2025", value: 720 },
    ];

    // Recent Betting Activity (Amount and Result of Bets)
    const recentBets = [
        { date: "2025-01-18", amount: 0.5, result: "Win" },
        { date: "2025-01-17", amount: 1.0, result: "Loss" },
        { date: "2025-01-16", amount: 2.0, result: "Win" },
    ];

    const streak = { wins: 5, losses: 2 }; // A winning streak of 5 and a loss streak of 2

    // Daily Reward Information
    const dailyReward = { amount: 0.2, available: true }; // 0.2 ETH as available daily reward

    return (
        <div className="min-h-screen bg-gradient-to-r text-white flex flex-col m-10">
            {/* Dashboard Title */}
            <h1 className="text-4xl font-bold">User Dashboard</h1>
            <div className="flex gap-4 items-center mt-10">
                {/* Pie Chart for Win/Loss Ratio */}
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
                        Win/Loss Ratio (Total: 85% Wins, 15% Losses)
                    </p>
                </Card>

                {/* Account Information */}
                <Card className="w-2/3 p-4 h-[350px] justify-center flex flex-col">
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
                    <div className="flex gap-4 items-center ">
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

            {/* Transaction History Section */}
            <div className="mt-10">
                <h2 className="text-3xl font-bold mb-4">Transaction History</h2>
                <div className="bg-white/10 rounded-lg p-4">
                    {transactionHistory.map((tx, index) => (
                        <div
                            key={index}
                            className="flex justify-between py-2 border-b border-white/20"
                        >
                            <span>{tx.date}</span>
                            <span className="font-medium">{tx.amount} {tx.currency}</span>
                            <span
                                className={`${
                                    tx.type === "Deposit" ? "text-green-500" : "text-red-500"
                                }`}
                            >
                                {tx.type}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Bets Section */}
            <div className="mt-10">
                <h2 className="text-3xl font-bold mb-4">Recent Bets</h2>
                <div className="bg-white/10 rounded-lg p-4">
                    {recentBets.map((bet, index) => (
                        <div
                            key={index}
                            className="flex justify-between py-2 border-b border-white/20"
                        >
                            <span>{bet.date}</span>
                            <span className="font-medium">{bet.amount} ETH</span>
                            <span
                                className={`${
                                    bet.result === "Win" ? "text-green-500" : "text-red-500"
                                }`}
                            >
                                {bet.result}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Win/Loss Streak Section */}
            <div className="mt-10">
                <h2 className="text-3xl font-bold mb-4">Win/Loss Streak</h2>
                <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between">
                        <span className="font-medium">Wins:</span>
                        <span className="text-green-500">{streak.wins}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Losses:</span>
                        <span className="text-red-500">{streak.losses}</span>
                    </div>
                </div>
            </div>

            {/* Daily Reward Section */}
            <div className="mt-10">
                <h2 className="text-3xl font-bold mb-4">Daily Reward</h2>
                <div className="bg-white/10 rounded-lg p-4">
                    {dailyReward.available ? (
                        <div className="flex justify-between">
                            <span className="font-medium">Reward Available:</span>
                            <span className="text-green-500">{dailyReward.amount} ETH</span>
                        </div>
                    ) : (
                        <p className="text-red-500">No reward available today</p>
                    )}
                </div>
            </div>

            {/* Monthly Performance Stats */}
            <div className="mt-10">
                <h2 className="text-3xl font-bold mb-4">Monthly Stats</h2>
                <Card className="w-full h-[350px] p-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={barChartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>
            </div>
        </div>
    );
}
