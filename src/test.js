const { Web3 } = require('web3');

// Connect to Truffle Develop blockchain
const web3 = new Web3('http://127.0.0.1:9545');

async function main() {
    // Get list of accounts
    const accounts = await web3.eth.getAccounts();
    console.log('Accounts:', accounts);

    // Get balance of first account
    const balance = await web3.eth.getBalance(accounts[0]);
    console.log(`Balance of ${accounts[0]}:`, web3.utils.fromWei(balance, 'ether'), 'ETH');
}

main();