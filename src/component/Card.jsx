import React, { useState } from 'react';
import Style from './card.module.css';


const Card=({title,price,category,date,id,allExpense,setAllExpense,wallet,setWallet})=>{

  const handleDelete=(id)=>{
    const obj=allExpense.find((data)=>{return data.id===id});
    const newexpense= allExpense.filter((data)=>{return data.id!==id});
    setWallet((prev)=>{return Number(prev)+Number(obj.price)});
    setAllExpense(newexpense);
    localStorage.setItem('expenses',JSON.stringify(newexpense));
  }
  const handleEdit=(id)=>{
      
  

  }
  return (
    <div className={Style.card}>
        <div className={Style.info}>
            <p>{title}</p>
            <p>{date}</p>
        </div>
        <div className={Style.btns}>
            <p>{price}</p>
            <button onClick={()=>handleDelete(id)}>delete</button>
            <button onClick={()=>handleEdit(id)}>Edit</button>
        </div>
    </div>
  )
}

export default Card