import React from 'react';
import Style from './home.module.css';
import Wallet from '../component/Wallet';
import Expense from '../component/Expense';
import Piechart from '../component/PieChart';
import Transaction from '../component/Transaction';
import BarGraph from '../component/BarGraph';
import { useState } from 'react';

const Home=()=>{

  const [formData, setFormData] = useState({ title: "", price: "", category: 'Food', date: '' });
  const [allExpense, setAllExpense] = useState([]);
  const [wallet, setWallet] = useState(()=>{
          let data=localStorage.getItem('wallet');
          if(data===null)
          {
              localStorage.setItem('wallet',JSON.stringify(5000));
              return 5000;
          }
          else
          {
              return JSON.parse(data);
          }
      });

  return(
    <div className={Style.maincontainer}>
          <h1>Expense Tracker</h1>
          <div className={Style.container}>
            <Wallet wallet={wallet} setWallet={setWallet}></Wallet>
            <Expense allExpense={allExpense} setAllExpense={setAllExpense} formData={formData}  setFormData={setFormData} 
            wallet={wallet} setWallet={setWallet}></Expense>
            <Piechart></Piechart>
          </div>
          <div className={Style.bottomContainer}>
            <Transaction allExpense={allExpense} setAllExpense={setAllExpense} wallet={wallet} setWallet={setWallet}></Transaction>
            <BarGraph></BarGraph>
          </div>
    </div>
  )
}

export default Home;