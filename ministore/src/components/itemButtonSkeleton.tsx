import React from "react";
import styled from "styled-components";
import boxImg from "../images/buyBox.svg"
import Skeleton from "react-loading-skeleton";

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
    display:block;
    height:85%;
    flex-direction:column;
    align-items:center
`;
const ItemDesc = styled.div`
    height:30%;
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
    display:block 

`;
const BuySection = styled.div`
    display:block;
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
    border-radius:0 0 2.5vh 2.5vh;
    overflow:hidden
`;

const ItemButtomSkeleton = (props:any) => {

    return (
        <Container>
                <Ad>
                    <Skeleton height={'50%'} width={'100%'} style={{marginTop:'2.5px', borderRadius:'15%'}}/>
                    <Skeleton height={'10%'} width={'100%'} style={{marginTop:'15px'}}/>
                    <ItemDesc>
                        <Skeleton height={'100%'} width={'100%'}/>
                    </ItemDesc>
                </Ad>
                <BuySection>
                    <Skeleton height={'100%'} width={'100%'} baseColor="#0F52BA" />
                </BuySection>
        </Container>
    )

}

export default ItemButtomSkeleton;