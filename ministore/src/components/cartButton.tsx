import React from "react"
import styled from "styled-components"

import cartImg from "../images/cartBtn.svg"


const CartBtn = styled.button`
    
    display:flex;
    padding:8px;
    justify-content:space-evenly;
    align-items:center;
    width:90px;
    height:45px;
    background-color:#FFFFFF;
    border-radius:8px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.94px;
    text-align: left;

`; 

const CartButton = (props:any)=>{


    return(
        <CartBtn onClick={props.onClick}>
            <img src={cartImg} alt="cart-image" />
            {props.amount||0}
        </CartBtn>

    )

}

export default CartButton