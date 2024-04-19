import React, {createContext, useState, useEffect} from "react";



export const CartContext = createContext({})

export interface CartItem {
    id:number;
    photo:string;
    name:string;
    brand:string;
    description:string;
    price:number;
    amount:number;
}

const CartProvider = ({children}:any) =>{

    const [items, setItems] = useState<CartItem[]>([])


    return(
        <CartContext.Provider value={{items, setItems}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;