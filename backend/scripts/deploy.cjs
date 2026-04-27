const hre = require("hardhat");

async function main() {
  const Registro = await hre.ethers.getContractFactory("Registro");
  const contrato = await Registro.deploy();

  await contrato.waitForDeployment();

  console.log("✅ Contrato deployado em:", await contrato.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});