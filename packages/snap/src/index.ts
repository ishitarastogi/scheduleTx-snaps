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

export const onCronjob = async ({ request }) => {
//   const date = new Date(timestamp);
//   const currentMinute = date.getMinutes();
//   const currentHour = date.getHours();
//   const currentDayOfMonth = date.getDate();
//   const currentMonth = date.getMonth() + 1; // Date.getMonth() returns 0-11, so we add 1 to get 1-12
//   const currentDayOfWeek = date.getDay();

  const { minute, hour, dayOfMonth, month, dayOfWeek} = request.params;

//currentMinute and all will accept inputs from users  
  // Check if the current time matches the user's input
  if (
    ( minute === currentMinute) &&
    ( hour === currentHour) &&
    ( dayOfMonth === currentDayOfMonth) &&
    (month === currentMonth) &&
    (dayOfWeek === currentDayOfWeek)
  ) {
    // Run the custom logic
    switch (request.method) {
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



    
