import { useContext } from "react";
import { Web3Context } from "web3-hooks";
import MetaMaskBalanceOf from "./MetaMaskBalanceOf";

import { Box, Divider, Heading } from "@chakra-ui/react";

const MetaMaskDashboard = () => {
  const [web3State] = useContext(Web3Context);

  return (
    <>
      <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <div className="MetaMaskDashboard">
          <div className="informations">
            <div className="account">
              <Heading>Account</Heading>
              <p className="balance-web3">{web3State.account}</p>
            </div>
            <Divider mb="10" mt="10" />
            <div className="balance">
              <Heading>Balance</Heading>
              <p className="balance-web3">{web3State.balance} Ethers</p>
            </div>
            <Divider mb="10" mt="10" />
            <div className="network-name">
              <Heading>Network name</Heading>
              <p className="balance-web3"> {web3State.networkName}</p>
            </div>
            <Divider mb="10" mt="10" />
            <div className="network-id">
              <Heading>Network id</Heading>
              <p className="balance-web3">{web3State.chainId}</p>
            </div>
            <Divider mb="10" mt="10" />
            <div className="balanceOf">
              <MetaMaskBalanceOf />
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default MetaMaskDashboard;
