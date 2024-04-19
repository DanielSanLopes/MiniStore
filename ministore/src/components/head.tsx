import React, {useState} from "react";
import styled from "styled-components";
import '../App.css';
import CartButton from "./cartButton";
import Cart from "./cart";

const Title = styled.div`

    color:#FFFFFF;
    font-family: "Montserrat";
    font-size: 40px;
    font-weight: 600;
    line-height: 19px;
    text-align: left;
    height:33px;

`;
const Subtitle = styled.div`

    color:#FFFFFF;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 300;
    line-height: 19px;
    text-align: left;
 
`;
const Header = styled.div`

    display:flex;
    background-color:#0F52BA;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 300;
    text-align: left;
    width:100%; 
    height:101px; 
    align-items:center; 
    justify-content:space-between; 
    padding:20px 40px; 
    box-sizing:border-box
 
`;

const Head = (props:any) => {

    const [showCart, setShowCart] = useState(false)

    function ShowCart(){
        setShowCart(!showCart)
    }

    return(
        <Header>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
                <Title style={{}}>
                    MKS&nbsp;
                </Title>
                <Subtitle>
                    Sistemas
                </Subtitle>
            </div>      
            <CartButton onClick={ShowCart}/>
            <Cart show={showCart} onClose={ShowCart} price={"353456rgwe"}>
                saddsw
            </Cart>   
        </Header>
    )

}

export default Head;