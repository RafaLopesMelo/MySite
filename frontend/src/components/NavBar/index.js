import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeftCircle } from 'react-icons/fi';

import api from '../../services/api'

import './styles.css';

export default function NavBar() {
    
    async function Home() {

        useEffect()

    }

    return(
    <nav>

        <Link to='/' className='link'><FiArrowLeftCircle  className='back-arrow' /><span className='exit'>Exit</span></Link>
        <input type="checkbox" id='checkbox-menu'/>
        <label htmlFor='checkbox-menu'>
            <span></span>
            <span></span>
            <span></span>
        </label>

        <h2>Menu</h2>
        <div className='line'></div>
        <ul>
            <li> <Link to='/posts'> >Home </Link> </li>
            <li> >Web Design </li>
            <li> >Música </li>
            <li> >Outros </li>
        </ul>
    </nav>
    )
}
