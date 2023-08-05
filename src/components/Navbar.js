import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import '../App.css';

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <header>
                <nav id="main-nav">
                    <NavLink to="/"><img src='../images/logo.png' alt="Vercel Logo" /></NavLink>
                    <NavLink to="/">Features</NavLink>
                    <NavLink to="/">Docs</NavLink>
                    <NavLink to="/">Templates</NavLink>
                    <NavLink to="/">Integration</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/">Sign Up</NavLink>

                    <div id="toggle-btn" className='toggle'
                    onClick={() => setNavbarOpen((prev) => !prev)}
                    >
                        <button >{`${navbarOpen ? 'X' : '≡'}`}</button>
                    </div>

                    <div id="mob-nav" className={`${navbarOpen ? ' show' : ''}`}>
                        <NavLink classname="nav-link" to="/">Templates</NavLink>
                        <NavLink classname="nav-link" to="/">Analytics</NavLink>
                        <NavLink classname="nav-link" to="/">Pricing</NavLink>
                        <NavLink classname="nav-link" to="/">Contact</NavLink>
                        <NavLink classname="nav-link" to="/login">Login</NavLink>
                        <NavLink classname="nav-link" to="/">Sign Up</NavLink>
                    </div>
                </nav>
            </header>
        </>
    )
}
