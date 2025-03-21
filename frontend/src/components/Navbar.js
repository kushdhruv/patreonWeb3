// src/components/Navbar.js
import React from "react";

const Navbar = ({ connectWallet, account }) => {
  return (
    <nav style={styles.nav}>
      <h1>Web3 Patreon</h1>
      {account ? (
        <p style={styles.account}>Connected: {account}</p>
      ) : (
        <button onClick={connectWallet} style={styles.button}>
          Connect Wallet
        </button>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#282c34",
    color: "white",
  },
  button: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    backgroundColor: "#61dafb",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  account: {
    fontSize: "1rem",
  },
};

export default Navbar;