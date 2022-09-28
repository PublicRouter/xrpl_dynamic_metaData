//(1)=user= -> sell offer(destination:mint wallet, xrpFee: 0);
//(2)=server= -> accept sell offer
//(3)=server= -> Burn
//(4)=IPFS= -> Update/reHash
//(5)=server= -> re-mint new nft
//(6)=server= -> sell offer(destination:user wallet, xrpFee: 0);
//(7)=user= -> accept offer

//(8)delete old nftTokenID in centralized DB, add new nftTokenID with new xp value in DB

//Input: user wallet, old nftTokenID
//Output: new nftTokenID

//dependencies: (1)xumm sdk
//              (2)express.js


//possible issues i see:
//(1): having to wait for user to accept sell offer to finalize process
//(2): Process triggered by listening for sell offers to server?
//(3): what happens if user accidentaly rejects sell offer?



//#########
//PROCEDURE
//#########

createSellOffer() 
//--> from user acount

// const transactionBlob = {
//     "TransactionType": "NFTokenCreateOffer",
//     "Account": wallet.classicAddress,
//     "NFTokenID": tokenId,
//     "Amount": sellAmount,
//     "Flags": parseInt(flags)
// }

acceptSellOffer()
//--> server / minting account?

// const transactionBlob = {
//     "TransactionType": "NFTokenAcceptOffer",
//     "Account": wallet.classicAddress,
//     "NFTokenSellOffer": tokenOfferIndex,
// }

burnToken()
//--> from server / minting account?

// const transactionBlob = {
//     "TransactionType": "NFTokenBurn",
//     "Account": wallet.classicAddress,
//     "NFTokenID": tokenId
// }

hashMetaDataToIpfs()
//--> from server

// {
//     attributes:{},
//     properties: {}
// }

mintToken()
//--> from minting account

// const transactionBlob = {
//     TransactionType: "NFTokenMint",
//     Account: wallet.classicAddress,
//     URI: xrpl.convertStringToHex(ipfsHash from hashMetaDataToIpfs()),
//     // URI: xrpl.convertStringToHex(tokenUrl.value),
//     // Flags: parseInt(flags.value),
//     Flags: parseInt(0),
//     NFTokenTaxon: 0 //Required, but if you have no use for it, set to zero.
// }

createSellOffer()
//--> from minting acount

// const transactionBlob = {
//     "TransactionType": "NFTokenCreateOffer",
//     "Account": wallet.classicAddress,
//     "NFTokenID": tokenId,
//     "Amount": sellAmount,
//     "Flags": parseInt(flags)
// }

acceptSellOffer()
//--> from user account

// const transactionBlob = {
//     "TransactionType": "NFTokenAcceptOffer",
//     "Account": wallet.classicAddress,
//     "NFTokenSellOffer": tokenOfferIndex,
// }


