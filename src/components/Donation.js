import React from "react";
import { useContext, useState } from "react";
import { ethers } from "ethers";
import { Web3Context } from "web3-hooks";

import { Stack, Input } from "@chakra-ui/react";

const Donation = () => {
  const [web3state] = useContext(Web3Context);
  const [eth2send, setEth2send] = useState(0);

  const donationRecipient = "0x4501707F9A8A6dC33cF1d82006f6E6967Bf0C496";

  const handleClickDonate = async () => {
    const weiAmount = ethers.utils.parseEther(eth2send);
    try {
      const tx = await web3state.signer.sendTransaction({
        to: donationRecipient,
        value: weiAmount,
      });
      await tx.wait();
      console.log("TX MINED");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div className="donation">
        <h2>Thank for your donations (ETH)</h2>
        <label htmlFor="Donation">Amount :</label>
        <Stack spacing={3}>
          <Input
            variant="flushed"
            placeholder="Eth Amount"
            id="Donation"
            onChange={(event) => setEth2send(event.target.value)}
            type="number"
          />
        </Stack>
        <button className="btn-donation" onClick={handleClickDonate}>
          Donate
        </button>
      </div>
    </div>
  );
};

export default Donation;
