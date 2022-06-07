import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Deejins',
  tokenName: 'Deejins',
  tokenSymbol: 'DJNS',
    hiddenMetadataUri: 'ipfs://QmVnengxS2VduKYxUMFXLBmwvYEDoGgszpyybJ13uXHox7/hidden.json',
  maxSupply: 2345,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 4,
  },
  preSale: {
    price: 0.00,
    maxMintAmountPerTx: 3,
  },
  publicSale: {
    price: 0.00,
    maxMintAmountPerTx: 3,
  },
    contractAddress: "0x3ed1c90f3b0b7812e78151f43b846bbbe8e4d421",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
