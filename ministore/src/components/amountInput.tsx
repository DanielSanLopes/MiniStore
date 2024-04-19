import React, { useEffect, useState } from 'react';

const AmountInput = ({children,...props}:any) =>{

    const [amount, setAmount] = useState(0)

    const handleSum = ()=>{
        setAmount(amount+1)
    }
    const handleLess = ()=>{
        if(amount > 0)
            setAmount(amount-1)
    }

    useEffect(props.onChange(amount)
        ,[amount])

    return(
        <div style={{display:'flex', width:'100%', justifySelf:'center', alignSelf:'center'}}>
            <button  onClick={handleLess}>-</button>
            <input type='text' onChange={value => setAmount} value={amount} style={{width:'100%'}}/>
            <button onClick={handleSum}>+</button>
            
        </div>
    )
}

export default AmountInput;