
import './Perfumes.css';
import React, { useEffect, useState } from 'react';
import Perfume from './perfume/Perfume';
import Cart from '../cart/Cart';

const Perfumes = () => {
    const [perfumes, setPerfumes] = useState([])
    const [addedPerfumes, setAddedPerfumes] = useState([])
    
    useEffect(() => {
        fetch('perfumes.json')
            .then(res => res.json())
            .then(data => setPerfumes(data))
    }, [])

    // Add to cart handler
    const addToCart = (addPerfume) => setAddedPerfumes([...addedPerfumes, addPerfume])

    // Add random ones
    const addOne = () => {
        
    }

    // reset cart
    const resetCart = ()=>{}

    return (
        <div className='shopping-area '>
            <div className='perfume-contain row row-cols-1 row-cols-sm-2 row-cols-lg-3 m-0'>
            {
                perfumes.map(perfume => <Perfume
                    key={perfume.id}
                    perfume={perfume}
                    addToCart = {addToCart}>
                    </Perfume>
                )
            }
            </div>
            {/* Cart section */}
            <div className='cart text-center'>
                <h2>Shopping Cart</h2>
                {
                    addedPerfumes.map(perfume => <Cart
                        key={perfume.id}
                        perfume={perfume}
                        addOne={addOne}
                        resetCart ={resetCart}> 
                        </Cart>)
                }
            </div>
        </div>
    );
};

export default Perfumes;