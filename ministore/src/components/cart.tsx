import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import { useAnimate } from "framer-motion";
import CartItem from "./cartItems";
import { CartContext } from "../contexts/cartProducts";
import { ProductsContext } from "../contexts/products";

//#region StyledComponents
const View = styled.div`
    display:flex;
    flex-direction:column;
    box-shadow: -5px 0px 6px 0px #00000021;
    position:fixed;
    height:100%;
    width:30%;
    background-color:#0F52BA;
    top:0px;
    z-index:-1; 
    border-width:5px;
    //border-color:red; 
    //border-style:solid;
    box-sizing:border-box;
    transform-origin: top right;
`;
const Header = styled.div`
    display:flex;
    justify-content: space-between;
    height:90px;
    //background-color:red;
    box-sizing:border-box;
    padding:25px 30px;  
    bottom:0px;
`;
const Title = styled.div`
    font-family: Montserrat;
    font-size: 100%;
    font-weight: 700;
    line-height: 32.91px;
    text-align: left;
    color:white;
    width:37%;
    //background-color:green;
`;
const CloseButton = styled.button`
    border-radius:100%;
    height:38px;
    width:38px;
    align-self:center;
    box-sizing: border-box; 
    border-width:0px;
    font-size:100%;
    font-family: Montserrat;

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
const ContainerItems = styled.div`

`;
const Label = styled.div`
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    width:25%;
    color:white;
    overflow:hidden;
    text-overflow:"...";
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
//#endregion


const Cart = ({children, ...props}:any) => {

    const [scope, animate] = useAnimate()

    useEffect(()=>{
        if(props.show){
            animate(scope.current, {x:"227%", zIndex:1})
        }else
            animate(scope.current, {x:"420%"})
    }, [props.show])

    const {items, setItems}:any = useContext(CartContext);
    const {data}:any = useContext(ProductsContext);

   
    return(
        <View ref={scope}>
 
            <Header>
                <Title>Carrinho de compras</Title>
                <CloseButton onClick={props.onClose}>X</CloseButton>
            </Header>
            <div style={{backgroundColor:'', height:'100%', display:'flex', justifyContent:'center', alignItems:'start', boxSizing:'border-box', padding:"5% 0px"}}>
                <CartItem>

                </CartItem>
            </div>
            <div style={{backgroundColor:'', height:'97px', boxSizing:'border-box',  display:"flex", alignItems:'center', paddingRight:"10%", paddingLeft:"5%"}}>
                <Label style={{ boxSizing:'border-box'}}>
                    Total:
                </Label>
                <PriceLabel >
                    R${}
                </PriceLabel>
            </div>
            <button 
            style={{
                backgroundColor:'black', 
                height:'97px', 
                color:'white',
                fontFamily: "Montserrat",
                fontSize: "28px",
                fontWeight: 700,
                lineHeight: "15px",
                boxSizing:"border-box",
                textAlign: "center",  
                borderWidth:0,
            }}>Finalizar Compra</button>

        </View>

        // <motion.div
        // ini>

        // </motion.div>
    )

}




export default Cart;