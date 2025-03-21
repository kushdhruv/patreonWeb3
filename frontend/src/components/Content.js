import React, { useState } from 'react';
import { web3, contentPaymentContract } from '../web3';

function Content({ account }) {
    const [contentHash, setContentHash] = useState('');

    const purchaseContent = async () => {
        await contentPaymentContract.methods.purchaseContent(web3.utils.toWei('1', 'ether'), contentHash).send({ from: account });
        alert('Content purchased successfully!');
    };

    return (
        <div>
            <input type="text" placeholder="Content Hash" onChange={(e) => setContentHash(e.target.value)} />
            <button onClick={purchaseContent}>Purchase Content</button>
        </div>
    );
}

export default Content;