import { useState } from 'react'
import './App.css'
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import Home from './components/Home';
import Socials from './components/Socials';
import '@radix-ui/themes/styles.css';


function App() {
  const keypair = Keypair.generate();
  const publicKey = keypair.publicKey.toString();
  const secretKey = keypair.secretKey;
  console.log("Public Key:", publicKey);
  console.log("Private Key (Secret Key):", secretKey);
  const message = new TextEncoder().encode("hello world");
  const signature = nacl.sign.detached(message, secretKey);
  const result = nacl.sign.detached.verify(
    message,
    signature,
    keypair.publicKey.toBytes(),
  );

  console.log(result);
  return (
    <>
     <Socials/>
     <Home/>
    </>
  )
}

export default App
