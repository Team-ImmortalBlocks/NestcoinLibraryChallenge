import { Fragment, useState, useEffect } from "react";
import Nav from "./Nav";
import SearchBox from "./SearchBox";
import FeaturedBooks from "./FeaturedBooks";
import MyBooks from "./MyBooks";
import { ethers } from "ethers";

const AppContainer = () => {
  // usetstate for storing and retrieving wallet details
  const [account, setaccount] = useState({
    address: "",
    balance: null,
  });

  // Alway checking if MetaMask is actively connected
  useEffect(() => {
    if (!window.ethereum.isConnected()) {
      // Set address to nothing
      setaccount({
        address: "",
      });
      console.log("Disconnected");
    } else {
      setaccount({
        address: account.address,
      });
      console.log("Connected");
    }
  }, [account.address]);

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

  const getbalance = (address) => {
    // Requesting balance method
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        // Setting balance
        setaccount({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setaccount({
      address: account,
    });

    // Setting a balance
    getbalance(account);
  };

  return (
    <Fragment>
      <Nav data={account} handler={handleConnectWallet} />
      <SearchBox data={account} handler={handleConnectWallet} />
      <FeaturedBooks />
      <MyBooks data />
    </Fragment>
  );
};

export default AppContainer;
