import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Perfume = (props) => {
    const {name, picture, price} = props.perfume
    console.log(price)
    return (
        <div className='border border-1 border-dark p-0'>
            <img src={picture} className="img-fluid w-50" alt="" />
            <div>
                <h3>{name}</h3>
                <p>{price}</p>
                <button type="submit">Add to Cart
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
               

            </div>
        </div>
    );
};

export default Perfume;