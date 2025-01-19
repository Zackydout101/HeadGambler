"use client";

// @refresh reset
import { Balance } from "../Balance";
import { AddressInfoDropdown } from "./AddressInfoDropdown";
import { AddressQRCodeModal } from "./AddressQRCodeModal";
import { WrongNetworkDropdown } from "./WrongNetworkDropdown";
import { useAutoConnect, useNetworkColor } from "~~/hooks/scaffold-stark";
import { useTargetNetwork } from "~~/hooks/scaffold-stark/useTargetNetwork";
import { getBlockExplorerAddressLink } from "~~/utils/scaffold-stark";
import { useAccount, useNetwork } from "@starknet-react/core";
import { Address } from "@starknet-react/chains";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import ConnectModal from "./ConnectModal";
import scaffoldConfig from "~~/scaffold.config";

/**
 * Custom Connect Button (watch balance + custom design)
 */
export const CustomConnectPlayButton = () => {
    useAutoConnect();
    const networkColor = useNetworkColor();
    const { targetNetwork } = useTargetNetwork();
    const { account, status, address: accountAddress } = useAccount();
    const [accountChainId, setAccountChainId] = useState<bigint>(0n);
    const { chain } = useNetwork();
    const router = useRouter(); // Initialize the router

    const blockExplorerAddressLink = useMemo(() => {
        return (
            accountAddress &&
            getBlockExplorerAddressLink(targetNetwork, accountAddress)
        );
    }, [accountAddress, targetNetwork]);

    // Redirect to /game after wallet is connected
    useEffect(() => {
        if (status === "connected") {
            router.push("/dashboard");
        }
    }, [status, router]);

    // Effect to get chain id and address from account
    useEffect(() => {
        if (account) {
            const getChainId = async () => {
                const chainId = await account.channel.getChainId();
                setAccountChainId(BigInt(chainId as string));
            };

            getChainId();
        }
    }, [account]);

    if (status === "disconnected") return <ConnectModal />;

    if (accountChainId !== targetNetwork.id) {
        return <WrongNetworkDropdown />;
    }
};
