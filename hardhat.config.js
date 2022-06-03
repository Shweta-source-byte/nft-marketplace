
require("@nomiclabs/hardhat-waffle")

const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectId = "91554f6db5854802b95d06c17c43ac54"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mainnet: {
      url: 'https://rinkeby.infura.io/v3/{projectId}',
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4" ,
    };
