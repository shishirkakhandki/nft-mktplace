async function verifyContract() {
  const { run, ethers } = require("hardhat");
  const fs = require("fs");

  const contractAddress = "0xfEEbeeFb7EE6174Bee1bea4b485ed0adA803DE88"; // Replace with your contract's address

  const contractFactory = await ethers.getContractFactory("NFTMarketplace"); // Replace with your contract's name

  const contractABI = JSON.parse(contractFactory.interface.format("json"));
  // JSON.parse(marketplace.interface.format('json'))

  console.log("Contract ABI:", JSON.stringify(contractABI));

  fs.writeFileSync("./src/ABI.json", JSON.stringify(contractABI));

  console.log(`Verifying contract at address: ${contractAddress}`);

  const verificationResult = await run("verify", {
    address: contractAddress,
    constructorArguments: [], // If your contract has constructor arguments, provide them here
  });

  console.log(verificationResult);
}

verifyContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
