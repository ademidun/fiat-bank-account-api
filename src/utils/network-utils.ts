import { ethers } from 'ethers';


const { SERVER_WALLET_PRIVATE_KEY, INFURA_API_KEY} = process.env;

const hardHatSettings = {
    networks: {
        ethereum: {
          url: `https://ethereum.infura.io/v3/${INFURA_API_KEY}`,
          accounts: [`0x${SERVER_WALLET_PRIVATE_KEY}`],
          chainId: "1"
        },
        polygon: {
          url: `https://polygon-rpc.com`,
          accounts: [`0x${SERVER_WALLET_PRIVATE_KEY}`],
          chainId: "137"
        }
    }
};

// Helper method for fetching a connection provider to the Ethereum network
export function getNetworkSetting(chainId: string) {
    return Object.values(hardHatSettings.networks).find(chainSettings => chainSettings.chainId == chainId);
}
// Helper method for fetching a connection provider to the Ethereum network
export function getProvider(chainId: string) {
    const hardhatChainNetwork = getNetworkSetting(chainId);
    return ethers.getDefaultProvider(hardhatChainNetwork?.url);
}

// Helper method for fetching a wallet account using an environment variable for the PK
export function getAccount(chainId: string) {

    const hardhatChainNetwork = getNetworkSetting(chainId);
    if (!hardhatChainNetwork) {
        console.error("\x1b[33m%s\x1b[0m", `No matching chainId found for network: '${chainId}', using localhost.`);
        return null
    }
    return new ethers.Wallet(hardhatChainNetwork? hardhatChainNetwork.accounts[0]:"", getProvider(chainId));
}