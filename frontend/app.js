import React, { useState } from 'react';
import Web3 from 'web3';
import Navbar from './components/Navbar.js';
import Content from './components/Content.js';
import Chat from './components/Chat.js';

const web3 = new Web3(Web3.givenProvider);
const contentPaymentAddress = 'YOUR_CONTRACT_ADDRESS';
const contentPaymentABI = [/* ABI from your contract */];

function App() {
    const [account, setAccount] = useState('');

    const connectWallet = async () => {
        const accounts = await web3.eth.requestAccounts();
        setAccount(accounts[0]);
    };

    return (
        <div>
            <Navbar connectWallet={connectWallet} account={account} />
            <Content account={account} />
            <Chat account={account} />
        </div>
    );
}

export default App;