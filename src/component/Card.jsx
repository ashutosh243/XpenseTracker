import React, { useState } from 'react';
import Style from './card.module.css';


const Card=({title,price,category,date,id})=>{
  
  const [expense,setExpense]=useState(()=>{
    const data=localStorage.getItem('expenses');
    return data==null?[]:JSON.parse(data);
  });
  const handleDelete=(id)=>{ 
    const newexpense= expense.filter((data)=>{return data.id!==id});
    setExpense(newexpense);
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