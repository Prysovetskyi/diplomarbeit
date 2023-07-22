import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './style.module.css'
import { useSelector } from 'react-redux';
import logo_icon from '../Media/logo.png'
import basket_full from '../Media/basket_full.png'
import basket_icon from '../Media/basket.png'

const Header = () => {
    const [menuActive, setMenuActiveMenu] = useState(false)
    const { basket } = useSelector(state => state)
    const totalCount = basket.data.reduce((sum, { count }) => sum + count, 0)
    const changeClass = ({ isActive }) => isActive ? [s.nav_link, s.active].join(' ') : s.nav_link
    const menuHandler = () => { setMenuActiveMenu(!menuActive) }

    // Перевіряємо, чи є товари в кошику
    const isBasketEmpty = totalCount === 0;

    return (
        <header className={s.container}>
            <div className={s.header}>
                <Link to='/'>
                    <img className={s.logo} src={logo_icon} alt="logo" />
                </Link>
                <Link to='/categories'>
                    <button className={s.catalog_btn}>Catalog</button>
                </Link>
                <nav className={s.nav} >
                    <NavLink className={changeClass} onClick={menuHandler} to='/'>Main Page</NavLink>
                    <NavLink className={changeClass} onClick={menuHandler} to='/products/all'>All Products</NavLink>
                    <NavLink className={changeClass} onClick={menuHandler} to='/sales/sales_all'>All Sales</NavLink> 
                </nav>

                <div className={s.icons}>
                    <Link to='/basket'>
                        
                        {isBasketEmpty ? (
                            <img className={s.basket_icon} src={basket_icon} alt="basket_icon" />
                        ) : (
                            <img className={s.basket_icon} src={basket_full} alt="basket_full" />
                        )}

                    </Link>
                    <div className={s.burger} onClick={menuHandler}>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;
