import { OnRpcRequestHandler } from '@metamask/snaps-types';
import { OnCronjobHandler } from '@metamask/snaps-types';
import { ethers } from 'ethers';




  const sendTransaction = async () => {
    // Initialize the Ethereum provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get the user's Ethereum account address
    const signer = provider.getSigner();
    const address = await signer.getAddress();

    // Create the transaction object
    // Create the transaction object
    const tx = {
      to: "0x1234567890123456789012345678901234567890", // Replace with the recipient's address
      value: ethers.utils.parseEther("1"), // Replace with the amount of ether to send
    };
    // Sign and send the transaction
    const signedTx = await signer.sendTransaction(tx);
    console.log(`Transaction sent: ${signedTx.hash}`);
  };

    const sendTransactionGas = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const tx = {
        to: "0x1234567890123456789012345678901234567890",
        value: ethers.utils.parseEther("1"),
        gasPrice: ethers.utils.parseUnits(gasPrice, "gwei"),
      };
      const response = await signer.sendTransaction(tx);
      console.log(response);
    };
/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns `null` if the request succeeded.
 * @throws If the request method is not valid for this snap.
 * @throws If the `snap_confirm` call failed.
 */

export const onRpcRequest: OnRpcRequestHandler = async ({
  origin,
  request,
}) => {
{
    try {
      // Run the custom logic
      switch (request.method) {
        case "sendtx":
          await sendTransaction();
          break;
        case "sendtxgas":
          await sendTransactionGas();
          break;
        default:
          throw new Error("Method not found.");
      }
    } catch (err) {
      console.error(err);
    }
  }
};



    
