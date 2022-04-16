import { Fragment, useState, useEffect } from "react";
import Nav from "./Nav";
import SearchBox from "./SearchBox";
import FeaturedBooks from "./FeaturedBooks";
import MyBooks from "./MyBooks";
import { ethers } from "ethers";
import { ERC20ABI as abi } from "../ABI/nestLib";

const AppContainer = () => {
  // usetstate for storing and retrieving wallet details
  const [address, setaccount] = useState("");

  // Set the Smart Contract connection handler string
  const [connection, setConnection] = useState();

  // Smart Contract Address hardCoded (not_recommended)
  const SMART_CONTRACT_ADDRESS = "0xd0187b697C15C9Af1509f4a62ac77C53acF80247";

  // Alway checking if MetaMask is actively connected
  useEffect(() => {
    if (!window.ethereum.isConnected()) {
      // Set address to nothing
      setaccount("");
      console.log("Disconnected");
    } else {
      setaccount(address);
      //  Handle the Connection to the Smart Contract
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const connection = new ethers.Contract(
        SMART_CONTRACT_ADDRESS,
        abi,
        provider
      );
      setConnection(connection);
      console.log("Connected");
    }
  }, [address]);

  console.log(connection);

  const handleConnectWallet = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setaccount({
      address: account,
    });
  };

  return (
    <Fragment>
      <Nav address={address} handler={handleConnectWallet} />
      <SearchBox address={address} handler={handleConnectWallet} />
      <FeaturedBooks handleConnectWallet />
      <MyBooks handleConnectWallet />
    </Fragment>
  );
};

export default AppContainer;
