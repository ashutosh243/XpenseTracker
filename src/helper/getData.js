import { useState } from "react"

export const getData=()=>{

    
    let Transaction=localStorage.getItem('expenses');
    if(Transaction===null)
    {
        Transaction=[];
        return Transaction;
    }
    else Transaction=JSON.parse(Transaction);

    

   
    let mp=new Map();
    for(Element of Transaction)
    {
        if(!mp.has(Element.category))
        {
            mp.set(Element.category,1);
        }
        else
        {
            mp.set(Element.category,mp.get(Element.category)+1);
        }
    }
    let finalData=[];
    for(const [Key,value] of mp)
    {
      finalData.push({"key":Key,"value":value});
    }
    return finalData;
}
