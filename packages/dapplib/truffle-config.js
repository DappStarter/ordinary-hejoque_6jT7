require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remember arrow heavy knee front slender'; 
let testAccounts = [
"0x178765bd52129257d8f6257947f4af0e3fd992c2f19b11ae66896ee359864579",
"0x6b26a0d55ff8f949d82b10e8f35f9d825e0071aff87dd280cf41e4cac6b28319",
"0x7adb90e70ba2e788405b89cf285c5dfd839b6e6df1559930dde0f404868dbbf8",
"0xc74133a9cdee187e1f117794d2394d6796040e756a7d9aa7ac6189f3a0f9cbff",
"0x0a79dcb3ac251f4e17d1decb5867d8c24b404a591344878dd870632adcf1c897",
"0xe126d56c0da1854a1117bce1b9e93ab532f2a112afd3ba513483cef6c472d045",
"0x2631e60a5ec348b18d14c33cfef72be2b7b5dcdc145da434db928318c7de12ec",
"0x4f25be668a4e29c202125f4ad3fcf6ed5e4fcdfafb3b62a7f43b74304264dc1b",
"0xe2b84a5be30c9f228851536da7a3a7a82b15aec003291660319aa72913704d33",
"0x257b46e5a70acff2b982d1471073d38f5726eb8cc40c4887a9b4629bf2a328ba"
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

