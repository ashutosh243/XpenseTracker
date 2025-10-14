import React from 'react';
import Style from './home.module.css';
import Wallet from '../component/Wallet';
import Expense from '../component/Expense';
import Piechart from '../component/PieChart';
import Transaction from '../component/Transaction';
import BarGraph from '../component/BarGraph';

const Home=()=>{
  return(
      <div className={Style.maincontainer}>
          <h1>Expense Tracker</h1>
          <div className={Style.container}>
            <Wallet></Wallet>
            <Expense></Expense>
            <Piechart></Piechart>
          </div>
          <div className={Style.bottomContainer}>
            <Transaction></Transaction>
            <BarGraph></BarGraph>
          </div>
      </div>
  )
}

export default Home;