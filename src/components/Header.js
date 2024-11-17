
import React from 'react';
import { Link } from 'react-router-dom';
import cillageLogo from '../photos/cillage_logo.jpg'; // Ensure the path to your logo image is correct
import './Header.css';
import loho from "../photos/loho.jpg"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Header = () => {
    const [open,setOpen] = useState();
    const toggle = ()=>{
        setOpen(!open);
    }
    return (
        <header className="header">
            <div className="header-top">
                <img src={loho} alt="Cillage Logo" className="logo" />
                <div className="header-text">
                    <h1>CILLAGE INDIA FOUNDATION</h1>
                    <p>Technology to Transform Village Life</p>
                </div>
            </div>
            <nav className="nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/what-we-do" className="nav-link">What We Do</Link>
                <Link to="/who-we-are" className="nav-link">Who We Are</Link>
                <Link to="/get-involved" className="nav-link">Get Involved</Link>
            </nav>
            {open && <nav className="nav1">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/what-we-do" className="nav-link">What We Do</Link>
                <Link to="/who-we-are" className="nav-link">Who We Are</Link>
                <Link to="/get-involved" className="nav-link">Get Involved</Link>
            </nav>}
            <div className="nav-bar">
           <button className="nav-bar-toggle" onClick={toggle}>
            <div className="nav-bar-toggle1">{open ?<CloseIcon />:<MenuIcon />}</div>
           </button>
         </div>
        </header>
    );
};

export default Header;
