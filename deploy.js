const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider('vessel short cute tag raise lift busy aerobic text damage wild comic',
'https://rinkeby.infura.io/6oDcNgNRPVOrmiYxhpeo'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("Get all accounts", accounts);

    console.log("Attempting on the first account: ", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi! There']})
    .send({ gas: '1000000', from: accounts[0]});

    console.log("Result is deployed in", result.options.address);
};

deploy();