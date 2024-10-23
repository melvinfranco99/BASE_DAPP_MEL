const Migrations = artifacts.require("Migrations");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Migrations);
  const migrations = await Migrations.deployed()
};
