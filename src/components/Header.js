import React from 'react';
import { Link } from 'react-router-dom';
import loho from "../photos/loho.jpg";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <header className="header">
            <div className="header-top">
                <img src={loho} alt="Cillage Logo" className="logo" />
                <div className="header-text">
                    <Link to="/"><h1>CILLAGE INDIA FOUNDATION</h1></Link>
                    <p>Technology to Transform Village Life</p>
                </div>
            </div>

            <nav className="nav">
                     <div className="nav-left">
    <Link to="/whatsapp" className="nav-link">
        <FaWhatsapp className="whatsapp-icon" />
        <span>Whatsapp</span>
    </Link>
    <Link to="/donate" className="nav-link">Donate</Link>
</div>

                <div className="nav-right">
                <Link to="/" className="nav-link">Home</Link>
                    <Link to="/what-we-do" className="nav-link">What We Do</Link>
                    <Link to="/who-we-are" className="nav-link">Who We Are</Link>
                    <Link to="/get-involved" className="nav-link">Get Involved</Link>
                    <Link to="/membership" className="nav-link">Get Membership</Link>
                </div>
            </nav>

            {/* Mobile dropdown */}
            {open && (
    <nav className="nav1">
        <Link onClick={toggle} to="/" className="nav-link">Home</Link>
        <Link onClick={toggle} to="/what-we-do" className="nav-link">What We Do</Link>
        <Link onClick={toggle} to="/who-we-are" className="nav-link">Who We Are</Link>
        <Link onClick={toggle} to="/membership" className="nav-link">Get Membership</Link>
        <Link onClick={toggle} to="/get-involved" className="nav-link">Get Involved</Link>
        <Link onClick={toggle} to="/whatsapp" className="nav-link">
            <FaWhatsapp className="whatsapp-icon" />
            <span>Whatsapp</span>
        </Link>
        <Link onClick={toggle} to="/donate" className="nav-link">Donate</Link>
    </nav>
)}

            {/* Navbar toggle button for mobile */}
            <div className="nav-bar">
                <button className="nav-bar-toggle" onClick={toggle}>
                    <div className="nav-bar-toggle1">{open ? <CloseIcon /> : <MenuIcon />}</div>
                </button>
            </div>
        </header>
    );
};

export default Header;
