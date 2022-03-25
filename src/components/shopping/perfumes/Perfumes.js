
import './Perfumes.css';
import React, { useEffect, useState } from 'react';
import Perfume from './perfume/Perfume';

const Perfumes = () => {
    const [perfumes, setPerfumes] = useState([])
    
    useEffect(() => {
        fetch('perfumes.json')
            .then(res => res.json())
            .then(data => setPerfumes(data))
    }, [])
    // d-flex flex-column-reverse flex-lg-row
    return (
        <div className='shopping-area '>
            <div className='perfume-contain row row-cols-1 row-cols-sm-2 row-cols-lg-3 m-0'>
            {
                perfumes.map(perfume => <Perfume
                    key={perfume.id}
                    perfume={perfume}>
                    </Perfume>
                )
            }
            </div>
            {/* Cart section */}
            <div className='cart text-center'>
                <h2>Shopping Cart</h2>
            </div>
        </div>
    );
};

export default Perfumes;