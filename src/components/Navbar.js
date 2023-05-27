import React from 'react';
import '../styles/navbar.css';

const Navbar = ({ size, setShow }) => {
    return (
        <nav>
            <div className="nav_box">
                <span className="filter_page" onClick={() => setShow(true)}>
                    Filter Website
                </span>
                <div className="filter" onClick={() => setShow(false)}>
                    <div class="arrow">
                        <div class="arrow-top"></div>
                        <div class="arrow-bottom"></div>
                    </div>
                    {/* <span>{size}</span> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar