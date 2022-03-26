import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='bg-dark py-2 px-5 d-flex align-items-center'>
                <img src="images/brand-logo2.png" className='brand-logo text-light' alt="" />
                <h1 className='title ms-3'>Royal Perfume</h1>  
                
                <div className='ms-auto'>
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Order</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Products</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
           
        </div>
    );
};

export default Header;