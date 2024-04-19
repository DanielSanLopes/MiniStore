import React, { useContext } from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/head';
import Footer from './components/foot';
import ItemButtom from './components/itemButton';
import { ProductsContext } from './contexts/products';
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ItemButtomSkeleton from './components/itemButtonSkeleton';

const Container = styled.div`

  display:flex;
  color:black; 
  background-color:#F9F9F9; 
  height:100%;
  width:100%;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`

  height:75%;
  max-height:75vh;
  width:65% ;
  overflow-y: scroll;
  display:block;
  padding-left:50px;
  //scrollbar-width: thin;
  &::-webkit-scrollbar {
    
    width: 1px;
    //background: #b3b3b3;
    
  }
  &::-webkit-scrollbar-thumb {
    background: black;
    width: 0px;
    -webkit-border-radius: 1ex;
    -webkit-box-shadow: 0px 1px 1px rgba(0, 0, 0);
}


`;

function App() {


  const {data, isLoading, isError}:any = useContext(ProductsContext);

  return (

     <SkeletonTheme>
       <div style={{display:'flex', flex:1, flexDirection:'column', height:'100%'}}> 
        <Header/>
          <Container>
            <Wrapper>

              {isLoading || isError?
              <>
                <ItemButtomSkeleton/>
                <ItemButtomSkeleton/>
                <ItemButtomSkeleton/>
                <ItemButtomSkeleton/>
                <ItemButtomSkeleton/>
                <ItemButtomSkeleton/>
                <ItemButtomSkeleton/>
                <ItemButtomSkeleton/>
              </>
              :
              data?.products?.map((item:any,index:any)=>
                <ItemButtom 
                  id={item.id} 
                  photo={item.photo} 
                  brand={item.brand} 
                  name={item.name} 
                  description={item.description} 
                  price={item.price}/>)}
                                                                                                                                                                                                                                
            </Wrapper>
          </Container>
        <Footer/>
      </div>
     </SkeletonTheme>

  );
}

export default App;
