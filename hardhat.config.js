require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const fs = require("fs");
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/nAhiCHKvZkhkp4A7PkkCIBON0-BXW26d`,
      //accounts: [process.env.privateKey]
    },
    matic: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/nAhiCHKvZkhkp4A7PkkCIBON0-BXW26d",
      //accounts: [process.env.privateKey]
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/z49yATYNXMNvu9NKnc7RHxh9_OIxKItP`,
      accounts: [
        "0e08c8ddcda1695488f240efd1a2cf5f5ac7dec5f854a4ee93f04cc51f9cc20b",
      ],
    },
  },
  etherscan: {
    apiKey: "S7FVJPZKYC6MD8A2Z9FKZZ622Y82XX63TR", // Your Etherscan API key
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
