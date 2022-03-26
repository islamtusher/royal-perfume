
// the shopping components 
import './Perfumes.css';
import React, { useEffect, useState } from 'react';
import Perfume from './perfume/Perfume';
import Cart from '../cart/Cart';

const Perfumes = () => {
    const [perfumes, setPerfumes] = useState([]) // Store loaded data
    let [addedPerfumes, setAddedPerfumes] = useState([]) // storing add to cart data
    let [randomItem , setRandomItem] = useState({}) // store random item of cart
    
    // Load the fake json data
    useEffect(() => {
        fetch('perfumes.json')
            .then(res => res.json())
            .then(data => setPerfumes(data))
    }, [])

    // Add to cart handler
    const addToCart = (addPerfume) => {
        // 4 items stored ?
        if (addedPerfumes.length === 4) {
            alert('You have all-ready added 4 items')
            return
        }
        for (const item of addedPerfumes) {
            // item all-ready stored ?
            if (item.id === addPerfume.id) {
                alert('This Item has All-Ready Added')
                return
            }
        }
        setAddedPerfumes([...addedPerfumes, addPerfume]) // add items to cart
    }

    // delete item form cart
    const deleteItem = (id) => {
        const updateCart = addedPerfumes.filter(item => id !== item.id); 
        setAddedPerfumes(updateCart)
        // is this item in random list ?
        if (randomItem.id === id) {
            setRandomItem({})
        }
    }

    // Add random ones
    const randomOne = () => {
        // no items on selected list ?
        if (addedPerfumes.length === 0) {
            alert('No Items to Get Randomly')
            return
        }
        const randomItem = addedPerfumes[Math.floor(Math.random() * addedPerfumes.length)]
        setRandomItem(randomItem) // store the random item
    }
    
    // reset cart
    const resetCart = () => {
        setAddedPerfumes([])
        setRandomItem([])
    }

    return (
        <div className='shopping-area  mt-5'>
            {/* Products section */}
            <div className='perfume-contain row row-cols-1 row-cols-sm-2 row-cols-lg-3 justify-content-center m-0 gap-5'>
            {
                perfumes.map(perfume => <Perfume
                    key={perfume.id}
                    perfume={perfume}
                    addToCart = {addToCart}>
                    </Perfume>
                )
            }
            </div>

            {/* Shopping Cart section */}
            <div className='cart text-center'>
                <h2 className='shopping-title mx-auto'>Shopping Cart</h2>
                {
                    addedPerfumes.map(perfume => <Cart
                        key={perfume.id}
                        perfume={perfume}
                        deleteItem={deleteItem}> 
                        </Cart>)
                }
                <div className='mt-5'>
                    <button onClick={randomOne} className="cart-btn m-3" type="submit">Get Randomly</button>
                    <button onClick={resetCart} className="cart-btn" type="reset">Reset</button>
                </div>
                <div className='my-5 '>
                    <img src={randomItem.picture} className="added-img img-fluid rounded-circle" alt="" />
                    <h5>{randomItem.name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Perfumes;