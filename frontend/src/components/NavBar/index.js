import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeftCircle } from 'react-icons/fi';

import './styles.css';

const NavBar = props => (

    <nav>
        <Link to='/'><FiArrowLeftCircle size={40} className='back-arrow' /></Link><span>Back</span>
        <input type="checkbox" id='checkbox-menu' />
        <label htmlFor='checkbox-menu'>
            <span></span>
            <span></span>
            <span></span>
        </label>

        <h2>Menu</h2>
        <div className='line'></div>
        <ul>
            <li> >Home </li>
            <li> >Web Design </li>
            <li> >Música </li>
            <li> >Outros </li>
        </ul>
    </nav>
)

export default NavBar;