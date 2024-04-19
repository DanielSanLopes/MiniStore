import React, {useState, useContext} from "react";
import styled from "styled-components";
import AmountInput from "./amountInput";
import { CartContext } from "../contexts/cartProducts";


const Container = styled.div`
    width:78.7%;
    height:97px;
    background-color:white;
    border-radius:8px;
    display:flex;
    flex-direction:row;
    justify-content:center
`;
const RemoveButton = styled.button`
    position:relative;
    left:97%;
    top:-10%;
    height:18px;
    width:18px;
    background-color:black;
    border-width:0px;
    border-radius:50%;
    font-size:65%;
    font-family: Montserrat;
    text-align:center;
    
    &:hover {
        color:black;
        background-color:white;
    }
    &:focus{
        color:white;
        background-color:black;
    }
    &:active{
        color:white;
        background-color:black;
    }
    &:not(:active){
        color:white;
        background-color:black;
    }
    &:not(:active):hover{
        color:black;
        background-color:white;
    }
`;
const ItemTitle = styled.div`
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-align: baseline;
    color:#2C2C2C;
    margin: 7% 5px 5px 5px;
    text-overflow: "...";
    overflow:hidden;
    box-sizing: border-box; 
    display:inline-block; 
    //background-color:#0F52BA;
`;
const PriceLabel = styled.div`
    font-family: Montserrat;
    font-size: 98%;
    font-weight: 700;
    text-align: right;
    width:75%;
    color:white;
    marginRight:10px;
    overflow:hidden;
    text-overflow:"...";
`;

const CartItem = ({children, ...props}:any) =>{

    const [a,setA] = useState()

    return(
        <Container>
            <RemoveButton>X</RemoveButton>
            <img src={props.photo} style={{backgroundColor:"", width:"20%", marginLeft:"-5.3%"}}/>
            <ItemTitle style={{backgroundColor:"", width:"33%"}}>Apple Apple Watch</ItemTitle>
            <div style={{backgroundColor:"", width:"22%"}}>
                <AmountInput onChange={(value:any)=>setA}/>
            </div>
            <div style={{backgroundColor:"", width:"25%"}}></div>
        </Container>
    )
}

export default CartItem;