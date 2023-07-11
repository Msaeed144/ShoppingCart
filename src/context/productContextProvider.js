import React , { useState , useEffect, createContext } from 'react';

//API
import { getProducts } from '../services/api'

const ProductsContext = createContext();

const productContextProvider = (props) => {

    const [products , setProducts] = useState([])

    useEffect (() => {
        const fetchAPI = async () => {
            setProducts(await getProducts())
        }

        fetchAPI();
    },[])

    return (
        <ProductsContext.Provider value={products}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default productContextProvider;