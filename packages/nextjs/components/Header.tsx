"use client";

import React, {
    useCallback,
    useRef,
    useState,
    useEffect,
    useMemo,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, BugAntIcon } from "@heroicons/react/24/outline";
import { useOutsideClick } from "~~/hooks/scaffold-stark";
import { CustomConnectButton } from "~~/components/scaffold-stark/CustomConnectButton";
import { useTheme } from "next-themes";
import { useTargetNetwork } from "~~/hooks/scaffold-stark/useTargetNetwork";
import { devnet } from "@starknet-react/chains";
import { SwitchTheme } from "./SwitchTheme";
import { useAccount, useNetwork, useProvider } from "@starknet-react/core";
import { BlockIdentifier, getChecksumAddress } from "starknet";
import { useScaffoldStarkProfile } from "~~/hooks/scaffold-stark/useScaffoldStarkProfile";

type HeaderMenuLink = {
    label: string;
    href: string;
    icon?: React.ReactNode;
};

export const HeaderMenuLinks = () => {
    const pathname = usePathname();
    const { theme } = useTheme();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(theme === "dark");
    }, [theme]);

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

    const menuLinks: HeaderMenuLink[] = [
        ...(!checkSumAddress
            ? []
            : [
                  {
                      label: "Play",
                      href: "/game",
                  },
              ]),
        ...(!checkSumAddress
            ? []
            : [
                  {
                      label: "Dashboard",
                      href: "/dashboard",
                  },
              ]),
    ];

    return (
        <>
            {menuLinks.map(({ label, href, icon }) => {
                const isActive = pathname === href;
                return (
                    <li key={href}>
                        <Link
                            href={href}
                            passHref
                            className={`${
                                isActive
                                    ? "!bg-gradient-nav !text-white active:bg-gradient-nav shadow-md"
                                    : ""
                            } py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col bg-gradient-nav hover:text-white`}
                        >
                            {icon}
                            <span className="text-xl w-32 text-center">
                                {label}
                            </span>
                        </Link>
                    </li>
                );
            })}
        </>
    );
};

/**
 * Site header
 */
export const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const burgerMenuRef = useRef<HTMLDivElement>(null);

    useOutsideClick(
        //@ts-expect-error refs are supposed to be null by default
        burgerMenuRef,
        useCallback(() => setIsDrawerOpen(false), [])
    );

    const { targetNetwork } = useTargetNetwork();
    const isLocalNetwork = targetNetwork.network === devnet.network;

    const { provider } = useProvider();
    const { address, status, chainId } = useAccount();
    const { chain } = useNetwork();
    const [isDeployed, setIsDeployed] = useState(true);

    useEffect(() => {
        if (
            status === "connected" &&
            address &&
            chainId === targetNetwork.id &&
            chain.network === targetNetwork.network
        ) {
            provider
                .getClassHashAt(address)
                .then((classHash) => {
                    if (classHash) setIsDeployed(true);
                    else setIsDeployed(false);
                })
                .catch((e) => {
                    console.error("contreact cehc", e);
                    if (e.toString().includes("Contract not found")) {
                        setIsDeployed(false);
                    }
                });
        }
    }, [
        status,
        address,
        provider,
        chainId,
        targetNetwork.id,
        targetNetwork.network,
        chain.network,
    ]);

    return (
        <div className=" lg:static top-0 navbar min-h-0 flex-shrink-0 justify-between z-20 px-0 sm:px-2 my-4 border-b border-white pb-4">
            <div className="navbar-start w-auto lg:w-1/2 -mr-2">
                <Link
                    href="/"
                    passHref
                    className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0"
                >
                    <div className="flex relative w-10 h-10">
                        <Image
                            alt="SE2 logo"
                            className="cursor-pointer"
                            fill
                            src="/logo.png"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold leading-tight text-3xl">
                            Blockchain Ballerz
                        </span>
                    </div>
                </Link>
            </div>
            <div className="navbar-center flex-grow mr-2 gap-4">
                <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">
                    <HeaderMenuLinks />
                </ul>
            </div>
            <div className="navbar-end flex-grow mr-2 gap-4">
                {status === "connected" && !isDeployed ? (
                    <span className="bg-[#8a45fc] text-[9px] p-1 text-white">
                        Wallet Not Deployed
                    </span>
                ) : null}
                <CustomConnectButton />
                {/* <FaucetButton /> */}
                <SwitchTheme
                    className={`pointer-events-auto ${
                        isLocalNetwork ? "mb-1 lg:mb-0" : ""
                    }`}
                />
            </div>
        </div>
    );
};
