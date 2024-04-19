import React, {useContext} from "react";
import styled from "styled-components";
import boxImg from "../images/buyBox.svg"
import { CartContext } from "../contexts/cartProducts";
import { ProductsContext } from "../contexts/products";

const Container = styled.button`
    box-shadow: 0px 2px 8px 0px #00000022;
    border-radius:10%;
    display:inline-block;
    height:47%;
    width:23%;
    margin:5px;
    box-sizing: border-box; 
    border-width:0px;

    &:hover {
        background-color:#bbd0f290;
    }
    &:focus{
        background-color:white;
    }
    &:active{
        background-color:white;
    }
    &:not(:active){
        background-color:white;
    }
    &:not(:active):hover{
        background-color:#bbd0f290;
    }
`;
const Ad = styled.div`
    display:flex;
    height:85%;
    flex-direction:column;
    align-items:center
`;
const ItemTitle = styled.div`
    height:100%;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-align: left;
    color:#2C2C2C;
    width:60%;
    padding: 5px 5px 5px 10px;
    text-overflow: "...";
    overflow:hidden;
    box-sizing: border-box; 
    display:inline-block 
    //background-color:#0F52BA;
`;
const Price = styled.div`
    border-radius:5px;
    width:40%;
    height:70%;
    background-color:#373737;
    font-family: Montserrat, Arial, Sans-Serif;
    font-weight: 700;
    text-align: center;
    font-size:105%;
    color:white;
    box-sizing:border-box;
    padding:2%;
    margin-right:10px;
    overflow:hidden;
    text-overflow:"...";
`;
const ItemDesc = styled.div`
    height:20%;
    max-height:20vh;
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    text-align: left;
    color:#2C2C2C;
    padding: 10px;
    text-overflow: "...";
    overflow:hidden;
    box-sizing: border-box; 
    display:inline-block 

`;
const BuySection = styled.div`
    display:flex;
    height:15%;
    width:103.3%;
    position:relative;
    left:-1.8%;
    justify-content:center;
    align-items: baseline;
    font-family:Montserrat, Arial;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    text-align: left;
    color:white;
    background-color:#0F52BA;
    border-radius:0 0 2.5vh 2.5vh;
    overflow:hidden
`;

const ItemButtom = (props:any) => {

    const {items, setItems}:any = useContext(CartContext);
    const {data}:any = useContext(ProductsContext);

    const updateItems = () =>{
     
    }

    return (
        <Container onClick={updateItems}>
           {/* <div style={{display:"flex"}}> */}
                <Ad>
                    <img src={props.photo||boxImg} alt="imagem-do-produto" height={"50%"} width={"50%"}/>
                    <div style={{ display:'flex', height:"25%", justifyContent:'space-around', alignItems:'center'}}>
                        <ItemTitle>{props.brand + " " + props.name||"Texto Texto Texto Texto"}</ItemTitle>
                        <Price>R${props.price||"399,99"}</Price>
                    </div>
                    <ItemDesc>
                        {props.description}
            
                    </ItemDesc>
                </Ad>
                <BuySection>
                    <img src={boxImg} alt="buy-box-image" style={{margin:"5px"}}/>
                    COMPRAR
                </BuySection>
           {/* </div> */}
        </Container>
    )

}

export default ItemButtom;