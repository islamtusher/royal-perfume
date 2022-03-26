
// shopping cart component
import React from 'react';
import "./Cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Cart = ({perfume, deleteItem}) => {
    const {id, name, picture } = perfume
    return (
        <div>
            <div className='my-3 d-flex justify-content-between align-items-center mx-3 mx-sm-5 mx-md-5 mx-lg-5 '>
                <img src={picture} className="added-img img-fluid rounded-circle" alt="" />
                <h5>{name}</h5>
                <button onClick={()=>deleteItem(id)} className='delete-btn' type="reset"><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Cart;