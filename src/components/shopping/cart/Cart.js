import React from 'react';
import "./Cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Cart = ({perfume, addOne, resetCart}) => {
    const { name, picture, price } = perfume
    console.log(name, picture, price)
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center mx-3 mx-sm-5 mx-md-5 mx-lg-5 '>
                <img src={picture} className="added-img img-fluid rounded-circle" alt="" />
                <h5>{name}</h5>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </div>
            <div>
                <button onClick={addOne} type="submit">Add One</button>
                <button onClick={resetCart} type="reset">Reset</button>
            </div>
        </div>
    );
};

export default Cart;