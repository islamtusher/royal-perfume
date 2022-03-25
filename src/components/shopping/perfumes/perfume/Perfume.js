import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Perfume = ({addToCart, perfume}) => {
    const { name, picture, price } = perfume
    
    return (
        <div className='border border-1 border-dark p-0'>
            <img src={picture} className="img-fluid w-50" alt="" />
            <div>
                <h3>{name}</h3>
                <p>{price}</p>
                <button onClick={() => addToCart(perfume)} type="submit">
                    Add to Cart
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Perfume;