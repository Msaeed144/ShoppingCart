import React from 'react';
import { useContext } from 'react';
import { ProductsContext } from '../context/ProductContextProvider';
import {Link} from 'react-router-dom'

const ProductDetails = (props) => {
    const id = props.match.params.id
    const data = useContext(ProductsContext)
    const product = data[id - 1]
    const {image , title , description , price , category} = product
    return (
        <div>
            <img src={image} alt='product' />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Categori: </span>{category}</p>
                <div>
                    <span>{price} $</span>
                    <Link to="/products">Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;