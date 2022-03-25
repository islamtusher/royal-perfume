
import './Perfumes.css';
import React, { useEffect, useState } from 'react';
import Perfume from './perfume/Perfume';
import Cart from '../cart/Cart';

const Perfumes = () => {
    const [perfumes, setPerfumes] = useState([])
    let [addedPerfumes, setAddedPerfumes] = useState([])
    let [randomItem , setRandomItem] = useState({})
    
    useEffect(() => {
        fetch('perfumes.json')
            .then(res => res.json())
            .then(data => setPerfumes(data))
    }, [])

    // Add to cart handler
    const addToCart = (addPerfume) => {
        for (const item of addedPerfumes) {
            if (item.id === addPerfume.id) {
                alert('This Item has All-Ready Added')
                return
            }
        }
        setAddedPerfumes([...addedPerfumes, addPerfume])
    }

    // delete item form cart
    const deleteItem = (id) => {
        const updateCart = addedPerfumes.filter(item => id !== item.id);
        setAddedPerfumes(updateCart)
    }

    // Add random ones
    const addOne = () => {
        const randomItem = addedPerfumes[Math.floor(Math.random() * addedPerfumes.length)]
        setRandomItem(randomItem)
    }
    
    // reset cart
    const resetCart = () => {
        setAddedPerfumes([])
        setRandomItem([])
    }

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
                        deleteItem={deleteItem}> 
                        </Cart>)
                }
                <div>
                    <button onClick={addOne} type="submit">Add One</button>
                    <button onClick={resetCart} type="reset">Reset</button>
                </div>
                <div className='mt-5 '>
                    <img src={randomItem.picture} className="added-img img-fluid rounded-circle" alt="" />
                    <h5>{randomItem.name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Perfumes;