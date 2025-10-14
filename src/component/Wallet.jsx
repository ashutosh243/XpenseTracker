import React from 'react'
import Style from './wallet.module.css';
import { useState } from 'react';
import ReactModal from 'react-modal';


const Wallet = () => {
    
    const [wallet, setWallet] = useState(()=>{
        let data=localStorage.getItem('wallet');
        console.log(data);
        if(data==="null")
        {
            localStorage.setItem('wallet',JSON.stringify(5000));
            return 5000;
        }
        else
        {
            return JSON.parse(data);
        }
    });
    const [balance,setBalance]=useState(0);
    const [isOpen,setOpen]=useState(false);
    
    const handlClick=()=>{
             setOpen((prev)=>{return !prev});
    }
    const handleChange=(e)=>{
        setBalance(e.target.value);
    }
    const addBalance=()=>{
        setWallet((prev)=>{return (Number(prev)+Number(balance))});
        localStorage.setItem('wallet',wallet);
        setBalance(Number(0));
    }
    return (<>
    <div className={Style.container} >
        <ReactModal isOpen={isOpen} className={Style.modal} overlayClassName={Style.modalOverlay}>
            <h1>Add Balance</h1>
            <input type="number"  placeholder='Income Amount' onChange={handleChange} value={balance}/>
            <div className={Style.buttonContainer}>
                <button type='submit' className={Style.open} onClick={addBalance}>Add</button>
                <button type='submit' className={Style.close} onClick={handlClick}>close</button>
            </div>
        </ReactModal>
        <div>Wallet Balance: {wallet}</div>
        <button type='submit' onClick={handlClick}>+ Add Income</button>
    </div>

    </>)
}

export default Wallet