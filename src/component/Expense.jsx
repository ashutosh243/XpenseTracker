import React, { useEffect } from 'react';
import Style from './expense.module.css';
import { useState } from 'react';
import ReactModal from 'react-modal';


const Expense = () => {
    const [Expense, setExpense] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const [formData, setFormData] = useState({ title: "", price: "", category: 'Food', date: '' });
    const [allExpense, setAllExpense] = useState([]);
    const [wallet, setWallet] = useState(() => {
        let data = localStorage.getItem('wallet');
        return JSON.parse(data);
    });
    useEffect(()=>{
        localStorage.setItem('wallet',wallet);  
    },[wallet]);
    const handlClick = () => {
        setOpen((prev) => { return !prev });
    }
    const handleChange = (e) => {

        setFormData((prev) => { return { ...prev, [e.target.name]: e.target.value } });
    }
    const handlesubmit = (e) => {

        e.preventDefault();
        const { title, price, category, date } = formData;
        if (title === '' || price === '' || category === '' || date === '') {
            alert("Enter all Details");
            return;
        }
        if(wallet<Number(price))
        {

            alert("Your wallet balance is low");
            return;
        }
        setWallet(wallet-Number(price));
        let saved = localStorage.getItem('expenses');
        let expenseArray = saved ? JSON.parse(saved) : [];
        let updatedFormData={...formData,id:expenseArray.length+1};  //just for id
        expenseArray.push(updatedFormData);

        setAllExpense((prev) => { return expenseArray });
        localStorage.setItem('expenses', JSON.stringify(expenseArray));

        console.log("here");
        setFormData({ title: "", price: "", category: '', date: '' });

    }
    return (<>
        <div className={Style.container}>
            <ReactModal isOpen={isOpen} className={Style.modal} overlayClassName={Style.modalOverlay}>
                <form className={Style.form} onSubmit={handlesubmit}>
                    <input type="text" placeholder='Title' name='title' className={Style.inputfield} value={formData.title} onChange={handleChange} />
                    <input type='text' placeholder='price' name='price' className={Style.inputfield} value={formData.price} onChange={handleChange} />
                    <select name='category' className={Style.inputfield} value={formData.category} onChange={handleChange}>
                        <option value="Food">Food</option>
                        <option value="Entertainement">Entertainment</option>
                        <option value="Travel">Travel</option>
                    </select>
                    <input name='date' type="date" placeholder='dd/mm/yy' className={Style.inputfield} value={formData.date} onChange={handleChange} />
                    <div className={Style.buttonContainer}>
                        <button className={Style.open} type='submit'>Add+</button>
                        <button className={Style.close} onClick={handlClick}>Close</button>
                    </div>
                </form>
            </ReactModal>
            <div>Expenses: {Expense}</div>
            <button type="submit"  onClick={handlClick}>+ Add Expense</button>
        </div>
    </>
    )
}

export default Expense;