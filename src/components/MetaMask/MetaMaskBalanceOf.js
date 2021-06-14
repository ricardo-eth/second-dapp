import React from "react";
import { useContext, useState } from "react";
import { ethers } from "ethers";
import { Web3Context } from "web3-hooks";

import { Stack, Input, Button, Divider } from "@chakra-ui/react";

const MetaMaskBalanceOf = () => {
  const [web3State] = useContext(Web3Context);
  const [ethBalance, setEthBalance] = useState(0);
  const [address, setAddress] = useState(ethers.constants.AddressZero);

  const handleClickGetBalance = async () => {
    try {
      const balance = await web3State.provider.getBalance(address);
      setEthBalance(ethers.utils.formatEther(balance));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="MetaMaskBalanceOf">
      <div className="style-balanceOf">
        <h2>Balance Of</h2>
        <div>
          <label htmlFor="balanceOf">{null}</label>
          <Stack spacing={3}>
            <Input
              variant="flushed"
              placeholder="Ethereum Address"
              id="balanceOf"
              onChange={(event) => setAddress(event.target.value)}
            />
          </Stack>
          <Button
            colorScheme="teal"
            size="md"
            mt="5"
            mb="10"
            onClick={handleClickGetBalance}
          >
            Get Balance
          </Button>
        </div>
        <Divider mb="10" />
        <p className="balance-address">Address</p>
        <p className="balance-w3Address">{address}</p>
        <p className="balance-total">Balance</p>
        <p className="balance-w3EthBalance">{ethBalance} ETHER</p>
      </div>
    </div>
  );
};

export default MetaMaskBalanceOf;
