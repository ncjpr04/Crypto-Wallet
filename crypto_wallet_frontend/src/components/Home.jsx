import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Eye, EyeOff, ChevronDown, ChevronUp, Moon, Copy, Sun, Clipboard, ClipboardCheck, Trash, Plus, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/alert-dialog";
import Socials from "./Socials"






function Home() {

    const [userMnemonic, setUserMnemonic] = useState('');
    const [mnemonicWords, setMnemonicWords] = useState([]);
    const [showMnemonic, setShowMnemonic] = useState(false);

    useEffect(() => {
        const fetchMnemonic = async () => {
            try {
                const response = await fetch("http://localhost:5000/create-wallet");
                const data = await response.json();
                setMnemonicWords(data.seed.split(" "));
                toast.success("Successfully connected to server.");
            } catch (error) {
                console.error("Error Connecting to server:", error);
                toast.error("Error Connecting to server !");
            }
        };
        fetchMnemonic();
    }, []);

    const fetchWalletsFromMnemonic = async () => {
        try {
            const response = await fetch("http://localhost:5000/wallets-from-mnemonic", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ mnemonic: userMnemonic }),
            });
            // console.log("Response status:", response.status);
            // console.log("Response headers:", response.headers);
            if (!response.ok) {
                const errorResponse = await response.json();
                // console.log("Error response:", errorResponse);
                throw new Error(`Error fetching wallets: ${errorResponse.error} - ${errorResponse.message}`);
                toast.error("Error fetching wallets !");
            }
            const data = await response.json();
            // console.log("Response data:", data);
            setWallets(data.wallets);
            toast.success("Wallets fetched successfully.");
        } catch (error) {
            console.error("Error fetching wallets:", error);
            toast.error("Error fetching wallets !");
        }
    };


    // State for wallets, visibility toggles, and theme mode
    const [wallets, setWallets] = useState([]);
    const [showKey, setShowKey] = useState({});
    const [expandedWallets, setExpandedWallets] = useState({});
    const [darkMode, setDarkMode] = useState(true);
    const [copied, setCopied] = useState({});
    const [deleteWallet, setDeleteWallet] = useState(null);

    // Function to create a wallet
    const createWallet = async () => {
        try {
            const response = await fetch("http://localhost:5000/create-wallet");
            const data = await response.json();
            // console.log("Wallet created:", data);
            toast.success("Wallet generated successfully.");
            setWallets([...wallets, data]);
            setMnemonicWords(data.seed.split(" ")); // Update the mnemonic words state
            localStorage.setItem('wallets', JSON.stringify([...wallets, data]));
        } catch (error) {
            console.error("Error creating wallet:", error);
            toast.error("Wallet Creation Failed !");
        }
    };

    // Function to handle copying text to clipboard
    const handleCopy = (text, index, field) => {
        navigator.clipboard.writeText(text);
        toast.success(`${field} Copied!`);
        setCopied({ ...copied, [`${index}-${field}`]: true });
        setTimeout(() => {
            setCopied({ ...copied, [`${index}-${field}`]: false });
        }, 2000);
    };
    const handleClearWallets = () => {
        localStorage.removeItem("wallets");
        setWallets([]);
        toast.success("All wallets cleared.");
    };
    // Function to toggle the visibility of secret keys and mnemonics
    const toggleShowKey = (index) => {
        setShowKey(prevState => ({ ...prevState, [index]: !prevState[index] }));
    };

    // Function to toggle expansion of wallet details
    const toggleExpandWallet = (index) => {
        setExpandedWallets(prevState => ({ ...prevState, [index]: !prevState[index] }));
    };

    // Function to toggle between dark and light modes
    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };



    // Function to delete a wallet
    const deleteWalletHandler = (index) => {
        setDeleteWallet(index);
    };

    // Function to confirm deletion of a wallet
    const confirmDeleteWallet = () => {
        const newWallets = wallets.filter((wallet, i) => i !== deleteWallet);
        setWallets(newWallets);
        localStorage.setItem('wallets', JSON.stringify(newWallets));
        setDeleteWallet(null);
        toast.success("Wallet Deleted Successfully!");
    };

    // Function to cancel deletion of a wallet
    const cancelDeleteWallet = () => {
        setDeleteWallet(null);
    };

    // Load wallets from local storage on mount
    useEffect(() => {
        const storedWallets = localStorage.getItem('wallets');
        if (storedWallets) {
            setWallets(JSON.parse(storedWallets));
        }
    }, []);

    const [isScrollVisible, setIsScrollVisible] = useState(false);

    useEffect(() => {
        const toggleScrollVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsScrollVisible(true);
            } else {
                setIsScrollVisible(false);
            }
        };

        window.addEventListener('scroll', toggleScrollVisibility);

        return () => window.removeEventListener('scroll', toggleScrollVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`min-h-screen flex flex-col items-center pb-32 p-6 ${
            darkMode 
                ? 'bg-gray-900 text-gray-100' 
                : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900'
        }`}>
            <Socials/>
            <Toaster />
            <div className="w-full max-w-4xl flex flex-col items-center gap-8">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-between w-full mb-8 items-center"
                >
                    <div className='flex items-center gap-4'>
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                            Crypto Wallet
                        </h1>
                        <a href="https://github.com/ncjpr04/Crypto-Wallet" target="_blank" rel="noopener noreferrer" className='hover:opacity-80 transition-opacity'>
                            <img src="https://github.com/ncjpr04/portfolio/blob/main/public/pngegg.png?raw=true" alt="GitHub" className="w-6 h-6" />
                        </a>
                    </div>
                    <Button
                        variant="outline"
                        onClick={toggleTheme}
                        className={`text-lg flex items-center gap-2 p-2 transition-colors ${
                            darkMode 
                                ? 'bg-gray-800 hover:bg-gray-700 text-gray-100' 
                                : 'bg-white hover:bg-gray-100 text-gray-900'
                        }`}
                    >
                        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        <span className="hidden md:inline">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                    </Button>
                </motion.div>

                <AnimatePresence>
                    {wallets.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className={`w-full max-w-md rounded-lg p-8 text-center shadow-lg ${
                                darkMode 
                                    ? 'bg-gray-800 border border-gray-700' 
                                    : 'bg-white border border-gray-200'
                            }`}
                        >
                            <h2 className="text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                                Create Wallet
                            </h2>
                            <p className="mb-6 text-lg">Create a secure and user-friendly crypto wallet to manage your digital assets.</p>
                            <div className="flex flex-col gap-4 items-center w-full">
                                <Input
                                    type="text"
                                    placeholder="Enter mnemonic"
                                    value={userMnemonic}
                                    onChange={(e) => setUserMnemonic(e.target.value)}
                                    className={`w-full shadow ${
                                        darkMode 
                                            ? 'bg-gray-700 text-gray-100 border-gray-600' 
                                            : 'bg-gray-50 text-gray-900 border-gray-300'
                                    }`}
                                />
                                <Button 
                                    onClick={fetchWalletsFromMnemonic} 
                                    className={`w-full ${
                                        darkMode 
                                            ? 'bg-blue-600 hover:bg-blue-700' 
                                            : 'bg-blue-500 hover:bg-blue-600'
                                    } text-white`}
                                >
                                    Fetch Wallets
                                </Button>
                                <div className="flex items-center w-full my-4">
                                    <div className="flex-grow border-t border-gray-300"></div>
                                    <span className="px-4 text-gray-500">OR</span>
                                    <div className="flex-grow border-t border-gray-300"></div>
                                </div>
                                <Button 
                                    size="lg" 
                                    onClick={createWallet} 
                                    className={`w-full ${
                                        darkMode 
                                            ? 'bg-indigo-600 hover:bg-indigo-700' 
                                            : 'bg-indigo-500 hover:bg-indigo-600'
                                    } text-white`}
                                >
                                    Create New Wallet
                                </Button>
                            </div>
                        </motion.div>
                    ) : (
                        <>
                            {wallets.length > 0 && (
                                <>
                                    {mnemonicWords.some((word) => word !== " ") && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                delay: 0.3,
                                                duration: 0.3,
                                                ease: "easeInOut",
                                            }}
                                            className={` group flex flex-col items-center gap-4 cursor-pointer rounded-lg border border-primary/10 p-8 ${darkMode ? ' border-gray-700 text-gray-100' : 'bg-gray-50 text-gray-900 hover:bg-gray-200 '}`}


                                        >
                                            <div className="flex w-full justify-between gap-52 items-center">
                                                <h2 className="text-xl md:text-3xl font-bold tracking-tighter">
                                                    Secret Phrase
                                                </h2>
                                                <Button
                                                    onClick={() => setShowMnemonic(!showMnemonic)}
                                                    variant="ghost"
                                                    className={`text-lg text-white ${darkMode ? 'bg-gray-950' : 'bg-white text-gray-900'}`}

                                                >
                                                    {showMnemonic ? (
                                                        <ChevronUp className="size-4" />
                                                    ) : (
                                                        <ChevronDown className="size-4" />
                                                    )}
                                                </Button>
                                            </div>

                                            {showMnemonic && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{
                                                        duration: 0.3,
                                                        ease: "easeInOut",
                                                    }}



                                                    className="flex flex-col w-full items-center justify-center"
                                                    onClick={async () => {
                                                        try {
                                                            const mnemonicString = mnemonicWords.join(' ');
                                                            await navigator.clipboard.writeText(mnemonicString);
                                                            toast.success("Mnemonic Copied to clipboard.");
                                                        } catch (error) {
                                                            console.error("Error copying to clipboard:", error);
                                                            toast.error("Error copying Mnemonic to clipboard");
                                                        }
                                                    }}
                                                >
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{
                                                            duration: 0.3,
                                                            ease: "easeInOut",
                                                        }}

                                                        className={`grid grid-cols-2 text-center rounded-xl md:grid-cols-3 lg:grid-cols-4 justify-center w-full items-center mx-auto mt-8 ${darkMode ? 'bg-gray-950' : 'bg-slate-300 text-gray-900'}`}


                                                    >
                                                        {mnemonicWords.map((word, index) => (
                                                            <p
                                                                key={index}
                                                                className={`md:text-lg bg-foreground/5  m-2 hover:bg-foreground/10 transition-all duration-300 rounded-lg px-3 py-2 ${darkMode ? 'bg-slate-800' : 'bg-white text-gray-900'}`}
                                                            >
                                                                {word}
                                                            </p>
                                                        ))}
                                                    </motion.div>
                                                    <div
                                                        className={`text-sm md:text-base text-primary/50 flex w-full gap-2 items-center  mt-4 group-hover:text-primary/80 transition-all duration-300 ${darkMode ? 'text-white hover:text-white' : '  text-black'}`}

                                                    >
                                                        <Copy className="size-4" /> Click Anywhere To Copy
                                                    </div>
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    )}

                                </>
                            )}
                            <Button size="lg" onClick={createWallet} className={` justify-between flex gap-3 px-4 items-center mt-8 ${darkMode ? 'bg-gray-50 text-gray-900 hover:bg-gray-200   ' : 'bg-gray-900 text-gray-100'}`}><Plus />Create Another Wallet</Button>
                            <AlertDialog>
                                <AlertDialogTrigger>
                                    <Button
                                        variant={"destructive"}
                                        size={"sm"}

                                        className="flex gap-2 bg-red-700 items-center"
                                    >
                                        {" "}
                                        <Trash className="size-4" /> Clear All Wallets
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent className={` mt-8 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900   '}`}>
                                    <AlertDialogHeader >
                                        <AlertDialogTitle >
                                            Are you absolutely sure?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete
                                            your saved wallets.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel className={` ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900 hover:bg-gray-200   '}`}>Cancel</AlertDialogCancel>
                                        <AlertDialogAction
                                            onClick={() => handleClearWallets()}
                                            className=" bg-red-700 text-white hover:bg-red-600"
                                        >
                                            Continue
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                            {wallets.map((wallet, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className={`w-full rounded-lg p-6 mt-6 shadow-lg ${
                                        darkMode 
                                            ? 'bg-gray-800 border border-gray-700' 
                                            : 'bg-white border border-gray-200'
                                    }`}
                                >
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                                            Wallet {index + 1}
                                        </h2>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                onClick={() => deleteWalletHandler(index)}
                                                className={`text-red-500 ${
                                                    darkMode 
                                                        ? 'hover:bg-red-900/20 border-gray-700' 
                                                        : 'hover:bg-red-100 border-gray-300'
                                                }`}
                                            >
                                                <Trash className="h-5 w-5" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                onClick={() => toggleExpandWallet(index)}
                                                className={
                                                    darkMode 
                                                        ? 'hover:bg-gray-700 border-gray-700 text-black' 
                                                        : 'hover:bg-gray-100 border-gray-300'
                                                }
                                            >
                                                {expandedWallets[index] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                                            </Button>
                                        </div>
                                    </div>
                                    <AnimatePresence>
                                        {expandedWallets[index] && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className='w-full justify-between flex '>
                                                    <Button
                                                        variant="outline"
                                                        onClick={() => toggleShowKey(index)}
                                                        className={`mb-4 ${darkMode ? 'bg-gray-800' : 'bg-white text-gray-900'}`}
                                                    >
                                                        {showKey[index] ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                                    </Button>
                                                </div>
                                                <div className="mb-4 flex justify-center items-start flex-col">
                                                    <p className="font-semibold mr-2">Wallet No. Under Master Mnemonic:</p>
                                                    <div className="flex-grow w-full flex rounded-md overflow-hidden justify-between" >
                                                        <Input
                                                            type="text"
                                                            value={wallet.index}
                                                            readOnly
                                                            className={`p-3 flex-grow rounded-md  ${darkMode ? 'bg-gray-700' : 'bg-gray-100 border border-gray-300'}`}
                                                        />

                                                    </div>

                                                </div>
                                                <div className="mb-4 flex justify-center items-start flex-col">
                                                    <p className="font-semibold mr-2">Address:</p>
                                                    <div className="flex-grow w-full flex rounded-md overflow-hidden justify-between" >
                                                        <Input
                                                            type="text"
                                                            value={wallet.address}
                                                            readOnly
                                                            className={`p-3 flex-grow rounded-md  ${darkMode ? 'bg-gray-700' : 'bg-gray-100 border border-gray-300'}`}
                                                        />
                                                        <button onClick={() => handleCopy(wallet.address, index, 'Address')} className="ml-2">
                                                            {copied[`${index}-key`] ? <ClipboardCheck className="h-5 w-5 text-green-500" /> : <Clipboard className="h-5 w-5" />}
                                                        </button>
                                                    </div>

                                                </div>
                                                <div className="mb-4 flex justify-center items-start flex-col">
                                                    <p className="font-semibold mr-2">Private Key:</p>
                                                    <div className="flex-grow w-full flex rounded-md overflow-hidden justify-between" >
                                                        <Input
                                                            type={showKey[index] ? "text" : "password"}
                                                            value={wallet.key}
                                                            readOnly
                                                            className={`p-3 flex-grow rounded-md  ${darkMode ? 'bg-gray-700' : 'bg-gray-100 border border-gray-300'}`}
                                                        />
                                                        <button onClick={() => handleCopy(wallet.key, index, 'Private key')} className="ml-2">
                                                            {copied[`${index}-key`] ? <ClipboardCheck className="h-5 w-5 text-green-500" /> : <Clipboard className="h-5 w-5" />}
                                                        </button>
                                                    </div>

                                                </div>
                                                <div className="mb-4 flex justify-center items-start flex-col">
                                                    <p className="font-semibold mr-2">Master Mnemonic:</p>
                                                    <div className="flex-grow w-full flex rounded-md overflow-hidden justify-between" >
                                                        <Input
                                                            type={showKey[index] ? "text" : "password"}
                                                            value={wallet.seed}
                                                            readOnly
                                                            className={`p-3 flex-grow rounded-md  ${darkMode ? 'bg-gray-700' : 'bg-gray-100 border border-gray-300'}`}
                                                        />
                                                        <button onClick={() => handleCopy(wallet.seed, index, 'Master Mnemonic')} className="ml-2">
                                                            {copied[`${index}-key`] ? <ClipboardCheck className="h-5 w-5 text-green-500" /> : <Clipboard className="h-5 w-5" />}
                                                        </button>
                                                    </div>

                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </>
                    )}
                </AnimatePresence>
            </div>
            {deleteWallet !== null && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
                    <div className={` rounded-lg p-6 w-full max-w-md   ${darkMode ? 'bg-gray-700' : 'bg-gray-100 border border-gray-300'}`}>
                        <h2 className="text-2xl font-semibold mb-4">Delete Wallet</h2>
                        <p className="mb-4">Are you sure you want to delete  <span className='font-black'> Wallet {deleteWallet + 1}</span> ?</p>
                        <div className="flex justify-end gap-4">
                            <Button onClick={cancelDeleteWallet} className="bg-gray-500 text-white">Cancel</Button>
                            <Button onClick={confirmDeleteWallet} className="bg-red-500 text-white">Delete</Button>
                        </div>
                    </div>
                </div>
            )}
            <AnimatePresence>
                {isScrollVisible && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        onClick={scrollToTop}
                        className={`fixed right-4 bottom-4 p-3 rounded-full shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                            darkMode
                                ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
                                : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowUp size={24} />
                        <span className="sr-only">Back to top</span>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Home;