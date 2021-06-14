import React from "react";
import { useContext, useState } from "react";
import { ethers } from "ethers";
import { Web3Context } from "web3-hooks";

import { Stack, Input, Button, Divider, Heading } from "@chakra-ui/react";

const MetaMaskTransfer = () => {
  const [web3State] = useContext(Web3Context);
  const [setEthBalance] = useState(0);
  const [address, setAddress] = useState(ethers.constants.AddressZero);
  const [eth2Send, setEth2Send] = useState(0);

  const handleClickGetBalance = async () => {
    try {
      const balance = await web3State.provider.getBalance(address);
      setEthBalance(ethers.utils.formatEther(balance));
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickSend = async () => {
    const weiAmount = ethers.utils.parseEther(eth2Send);
    try {
      const tx = await web3State.signer.sendTransaction({
        to: address,
        value: weiAmount,
      });
      await tx.wait();
      console.log("TX MINED");
    } catch (e) {
      console.log("##################################");
      console.log(e);
    }
  };
  return (
    <div className="MetaMaskTransfer">
      <div className="style-MetaMaskTransfer">
        <Heading>Address</Heading>
        <p>Choose destination address</p>
        <div>
          <label htmlFor="chooseAddress">{null}</label>
          <Stack spacing={3}>
            <Input
              variant="flushed"
              placeholder="Ethereum Address"
              id="chooseAddress"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </Stack>
          <Button
            colorScheme="teal"
            size="md"
            mt="5"
            onClick={handleClickGetBalance}
          >
            Confirm
          </Button>
          <Divider mb="10" mt="10" />
        </div>
        <div>
          <Heading>Verify</Heading>
          <p>Verify destination address</p>
          <label className="address-eth2send" htmlFor="eth2send">
            {address}
          </label>
          <Divider mb="10" mt="10" />
          <Heading>Amount</Heading>
          <p>Choose amount to transfer (ETH)</p>
          <Stack spacing={3}>
            <Input
              variant="flushed"
              placeholder="Ethereum Address"
              id="eth2Send"
              value={eth2Send}
              onChange={(event) => setEth2Send(event.target.value)}
            />
          </Stack>
        </div>
        <Button colorScheme="teal" size="md" mt="5" onClick={handleClickSend}>
          send
        </Button>
      </div>
    </div>
  );
};

export default MetaMaskTransfer;
