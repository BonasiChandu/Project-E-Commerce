import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';


const Navbar = ({ user }) => {
    const [menu, setMenu] = useState('Shop');
    const { getTotalCartItems } = useContext(ShopContext);

    
    const renderUserInitial = () => {
        if (user && user.name) {
            return user.name.charAt(0).toUpperCase();
        }
        return null; 
    };

    return (
        <div className='navbar'>
         
            <div className='nav-logo'>
                <img src={logo} alt="Shop Star Logo" />
                <p>Shop Star</p>
            </div>
           
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === 'Shop' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("mens") }}>
                    <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === 'mens' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("womens") }}>
                    <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === 'womens' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("kids") }}>
                    <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === 'kids' ? <hr /> : <></>}
                </li>
            </ul>
            <div className='nav-login-cart'>
                {user ? (
                    <div className="nav-user-initial">
                        {renderUserInitial()}  
                    </div>
                ) : null}
                <Link to='/cart'>
                    <img src={cart_icon} alt="Cart" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;
