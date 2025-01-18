import { useTargetNetwork } from "~~/hooks/scaffold-stark/useTargetNetwork";
import { useGlobalState } from "~~/services/store/store";
import { devnet, sepolia, mainnet } from "@starknet-react/chains";

/**
 * Site footer
 */
export const Footer = () => {
    const nativeCurrencyPrice = useGlobalState(
        (state) => state.nativeCurrencyPrice
    );
    const { targetNetwork } = useTargetNetwork();

    // NOTE: workaround - check by name also since in starknet react devnet and sepolia has the same chainId
    const isLocalNetwork =
        targetNetwork.id === devnet.id &&
        targetNetwork.network === devnet.network;
    const isSepoliaNetwork =
        targetNetwork.id === sepolia.id &&
        targetNetwork.network === sepolia.network;
    const isMainnetNetwork =
        targetNetwork.id === mainnet.id &&
        targetNetwork.network === mainnet.network;

    return (
        <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0 bg-base-100">
            <div>
                <div className="fixed flex justify-between items-center w-full z-10 p-4 bottom-0 left-0 pointer-events-none">
                    <div className="flex flex-col md:flex-row gap-2 pointer-events-auto"></div>
                </div>
            </div>
            <div className="w-full">
                <ul className="menu menu-horizontal w-full">
                    <div className="flex justify-center items-center gap-2 text-sm w-full">
                        <div className="text-center">
                            <a
                                href="https://github.com/Scaffold-Stark/scaffold-stark-2"
                                target="_blank"
                                rel="noreferrer"
                                className="link"
                            >
                                Fork me
                            </a>
                        </div>

                        <div className="text-center">
                            <a
                                href="https://t.me/+wO3PtlRAreo4MDI9"
                                target="_blank"
                                rel="noreferrer"
                                className="link"
                            >
                                Support
                            </a>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
};
