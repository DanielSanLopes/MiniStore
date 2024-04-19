import React, {createContext, useState, useEffect} from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { error } from "console";


export const ProductsContext = createContext({})

const queryClient = new QueryClient()

async function GetProducts (){
    const response = await fetch("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC")
    if (!response.ok)
        throw new Error("Os dados não foam carregados")
    
    // var result;        
    // await response.json().then(res => {result = res.products})
    // console.log("passou a response")
    // console.log(result);

    return response.json()
}

const ProductsProvider = ({children}:any) =>{

    const {data, isLoading, isError } = useQuery({queryKey:["products"], queryFn:()=>GetProducts()}, queryClient)
    return(
        <QueryClientProvider client={queryClient}>
            <ProductsContext.Provider value={{data, isLoading, isError}}>
                {console.log(data)}
                {children}
            </ProductsContext.Provider>
        </QueryClientProvider>
    )
}




export default ProductsProvider;