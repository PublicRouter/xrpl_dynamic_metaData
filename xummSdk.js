const { XummSdk } = require("xumm-sdk");
require('dotenv').config();
const myWallet = 'rKvE3ZUV4e975D5MfzTN4nYLeLgTu1HHF6';

const Sdk = new XummSdk(process.env.XUMM_APIKEY, process.env.XUMM_APISECRET);

// async function main(){
//     const pong = await Sdk.payload.create({
//         "txjson": {
//             "TransactionType": "SignIn"
//         }
//     });
//     console.log(pong)
// }

async function main(){
    const pong = await Sdk.payload.get("")
    console.log(pong)
}

main();