import express from "express";
import * as bip39 from "bip39";
import * as bitcoin from "bitcoinjs-lib";
import * as ecc from "tiny-secp256k1";
import { BIP32Factory } from "bip32";
import cors from "cors";

const bip32 = BIP32Factory(ecc);

const network = bitcoin.networks.testnet;
const path = "m/44'/1'/0'";

let masterSeed;
let masterMnemonic;
let walletIndex = 0;

const app = express(); // Define the app variable
const port = 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type"],
    credentials: true,
  })
);

function generateMasterSeed() {
  masterMnemonic = bip39.generateMnemonic();
  masterSeed = bip39.mnemonicToSeedSync(masterMnemonic);
}

function generateWallet() {
  if (!masterSeed) {
    generateMasterSeed();
  }

  const root = bip32.fromSeed(masterSeed, network);
  const accountPath = `${path}/${walletIndex}`;
  const account = root.derivePath(accountPath);
  const node = account.derive(0).derive(0);

  const btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network,
  }).address;

  walletIndex++;

  return {
    seed: masterMnemonic,
    address: btcAddress,
    key: node.toWIF(),
    index: walletIndex - 1,
  };
}
app.use(express.json());
app.get("/create-wallet", (req, res) => {
  const wallet = generateWallet();
  res.json(wallet);
});
app.post("/wallets-from-mnemonic", (req, res) => {
  try {
    const { mnemonic } = req.body;
    if (!mnemonic) {
      return res.status(400).json({ error: "Mnemonic is required." });
    }

    masterMnemonic = mnemonic;
    masterSeed = bip39.mnemonicToSeedSync(masterMnemonic);
    const wallets = [];

    for (let i = 0; i < 10; i++) {
      const root = bip32.fromSeed(masterSeed, network);
      const accountPath = `${path}/${i}`;
      const account = root.derivePath(accountPath);
      const node = account.derive(0).derive(0);

      const btcAddress = bitcoin.payments.p2pkh({
        pubkey: node.publicKey,
        network,
      }).address;

      wallets.push({
        seed: masterMnemonic,
        address: btcAddress,
        key: node.toWIF(),
        index: i,
      });
    }

    res.json({ wallets });
  } catch (error) {
    console.error("Error generating wallets:", error);
    res.status(500).json({ error: "Internal Server Error", message: error.message });
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
