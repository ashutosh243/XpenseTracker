import React, { useEffect } from 'react'
import Style from './transaction.module.css';
import Card from './Card'
import { useState } from 'react';
const Transaction = ({allExpense,setAllExpense,wallet,setWallet}) => {

  return (<>
    <div className={Style.container}>
      <div>Recent Transactions</div>
        <div className={Style.transaction}>
          {!allExpense.length&&<p>No Transactions!</p>}
          {
            allExpense.map((data,index)=>{ return <Card id={data.id} key={index} title={data.title} price={data.price} category={data.category} date={data.date} 
            allExpense={allExpense} setAllExpense={setAllExpense} wallet={wallet} setWallet={setWallet}></Card>})
          }
      </div>
    </div>
  </>)
}

export default Transaction;