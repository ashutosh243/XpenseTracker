import React from 'react'
import Style from './wallet.module.css';
import { useState } from 'react';
import ReactModal from 'react-modal';


const Wallet = () => {
    const [wallet, setWallet] = useState(()=>{
        const data=localStorage.getItem('wallet');
        return data===null?Number(0):JSON.parse(data);
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
        localStorage.setItem('wallet',balance);
        setBalance(Number(0));
    }

    return (<>
    <div className={Style.container} >
        <ReactModal isOpen={isOpen} className={Style.modal} overlayClassName={Style.modalOverlay}>
            <h1>Add Balance</h1>
            <input type="number"  placeholder='Income Amount' onChange={handleChange} value={balance}/>
            <div className={Style.buttonContainer}>
                <button className={Style.open} onClick={addBalance}>Add</button>
                <button className={Style.close} onClick={handlClick}>close</button>
            </div>
        </ReactModal>
        <div>Wallet Balance: {wallet}</div>
        <button type='button' onClick={handlClick}>+ Add Income</button>
    </div>

    </>)
}

export default Wallet