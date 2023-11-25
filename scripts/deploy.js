async function main() {
  const ArGramNFT = await ethers.getContractFactory("ArGram");
  const arGramNFT = await ArGramNFT.deploy();
  const txHash = arGramNFT.deployTransaction.hash;
  const txRecipt = await ethers.provider.waitForTransaction(txHash);

  console.log("Contract deployed to address:", txRecipt.contractAdress)
}

main()
  .then(() => { process.exit(0) })
  .catch((error) => { console.log(error), process.exit(1) })