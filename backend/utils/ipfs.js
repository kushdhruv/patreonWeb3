import { post } from 'axios';

const pinataApiKey = process.env.PINATA_API_KEY;
const pinataSecretApiKey = process.env.PINATA_SECRET_API_KEY;

async function uploadToIPFS(content) {
    const result = await post('https://api.pinata.cloud/pinning/pinJSONToIPFS', {
        pinataContent: content,
    }, {
        headers: {
            'Authorization': `Bearer ${process.env.PINATA_JWT}`,
        },
    });
    return result.data.IpfsHash;
}

export default { uploadToIPFS };