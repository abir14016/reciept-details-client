import React from 'react';
import onitoLogo from "../../../assets/logo/onito-logo.png";
import { Link } from "react-router-dom";
import LoginModal from '../../Login/Login/LoginModal';
import RegisterModal from '../../Login/Register/RegisterModal';

const Header = () => {
    return (
        <div className='bg-base-200 sticky top-0 z-50'>
            <div className="navbar md:container md:mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='font-bold text-secondary'><Link to="/">Home</Link></li>
                            <li className='font-bold text-secondary'><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className='w-32' src={onitoLogo} alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='font-bold text-secondary'><Link to="/">Home</Link></li>
                        <li className='font-bold text-secondary'><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label htmlFor="register-modal" className="btn modal-button btn-outline btn-primary mx-2">Register</label>
                    <RegisterModal></RegisterModal>
                    <label htmlFor="login-modal" className="btn modal-button btn-primary">Login</label>
                    <LoginModal></LoginModal>
                </div>
            </div>
        </div>
    );
};

export default Header;