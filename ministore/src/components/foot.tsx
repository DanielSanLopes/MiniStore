import React from "react";
import styled from "styled-components";
import '../App.css';


const Foot = styled.div`

    display:flex;
    background-color:#EEEEEE;
    width:100%; 
    height:34px; 
    align-items:center; 
    justify-content:center; 
    padding:20px 40px; 
    box-sizing:border-box
 
`;

const Text = styled.div`

    color:#000000;
    font-family: "Montserrat";
    font-size: 12px;
    font-weight: 400;
    line-height: 14.63px;
    text-align: center;
 
`;


const Footer = (props:any) => {

    return(
        <Foot>
            <Text style={{}}>
                MKS sistemas © Todos os direitos reservados
            </Text>
        </Foot>
    )

}

export default Footer;