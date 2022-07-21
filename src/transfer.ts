import { Signer, ethers } from "ethers";
import { getAccount, getProvider } from "./utils/network-utils";
import { randomString } from "./utils/string-utils";

export const MAX_DESTINATION_AMOUNT = 1;

export const transferAsset = async (chainId : string, destinationAddress: string, destinationAmount: number) => {

    const signer = getAccount(chainId) as Signer;
    const provider = getProvider(chainId);


    const gasPrice = await provider.getGasPrice();

    if (destinationAmount > MAX_DESTINATION_AMOUNT) {
        throw Error(`For testing purposes. 'destinationAmount' must not be greater than ${MAX_DESTINATION_AMOUNT}."`)
    }
    
    const transactionPromise = await signer.sendTransaction({
        to: destinationAddress,
        value: ethers.utils.parseEther(destinationAmount.toString()),
        gasPrice,
    });

    const transaction = await transactionPromise.wait();
    
    const response = {
        "transactionHash": transaction.transactionHash,
        "chainId": chainId,
        "requestId": randomString(16),
    }

    return response;

}