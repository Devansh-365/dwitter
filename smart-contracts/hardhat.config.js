require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url:'https://eth-rinkeby.alchemyapi.io/v2/4Ln0V8uKbWDNDS1iVDt9LQClOWiMqN2y',
      accounts: [
        '997b5147805a17a2a2b1202fa9bfd537abe6453720b2739ed54eef760b88f150',
      ]
    }
  }
};
