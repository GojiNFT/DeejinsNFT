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
  contractName: 'Emoonji',
  tokenName: 'Emoonji',
  tokenSymbol: 'EMJ',
    hiddenMetadataUri: 'ipfs://QmfQRHPiWQ8GpxB6hQNFjSoeApZRzTHXjEpvYcHzb6oKc8/Hidden.json',
  maxSupply: 3333,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 100,
  },
  preSale: {
    price: 0.00,
    maxMintAmountPerTx: 3,
  },
  publicSale: {
    price: 0.00,
    maxMintAmountPerTx: 5,
  },
    contractAddress: "0x0B69a54b3E531A516752900c23FE00d36EdBb71a",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
