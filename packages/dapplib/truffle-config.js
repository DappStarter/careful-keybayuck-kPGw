require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth pulse quality give armed front sick'; 
let testAccounts = [
"0xba93f2e42d77cf77c28393745fb6176d3016684d8e627bf8462f30938eef7d95",
"0x0b4f2f7d141fd46f4e9037520438ddbd6780b3558b4ad84918e8cf8a129ebdd0",
"0x213d74aacad1c561ba33e418f550536abefe826679d922ccad4656ae8451937f",
"0xc7a67ff32db3e025eb5a3acc579969104c6bfd1c56921c6a95e8e58131f772a1",
"0x07732d7a409d3f97284ee27abedb510f1e1252101b221581c260a4a69476168c",
"0xf6e710838bd05f97e9f6b077e3187af9af6f4442f9204cbac86c531717225b51",
"0x7793bcf80459f6e496674c630932c57ae27b995697bf55f139963d9295332f28",
"0x934a79127bbb5856bdca79a085ae8491236be4bc1794fcdb9eb003a83b0cd1ca",
"0x16d09d69fcb8ccccaa29a638c1c8dca8477adda670ff76c62c7055abc8777d9b",
"0x4fee1a4ccbb0e5bca8e995f48cb7bd6b5ef759d5747d53ebae0128909cc0884b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

