// single perfume cart component
import React from 'react';
import './Perfume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Perfume = ({addToCart, perfume}) => {
    const { name, picture, price } = perfume
    
    return (
        <div className='item-cart p-2 '>
            <img src={picture} className="img-fluid rounded-top" alt="" /> 
            
            <div>   {/* item info */}
                <h5 className='mt-3'>{name}</h5>
                <p className='price'>Price: ${price}</p>
                <button onClick={() => addToCart(perfume)} className="add-btn" type="submit">
                    Add to Cart
                    <FontAwesomeIcon className='ms-2 text-info' icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Perfume;