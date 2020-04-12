import React from 'react';
import { Link } from 'react-router-dom';

import { FaWhatsapp, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import { FiArrowLeftCircle } from 'react-icons/fi';

import './styles.css'

export default function Blog() {

    return (
        <div className='container'>
            <nav>
                <Link to='/'><FiArrowLeftCircle  size = { 40 } className='back-arrow'/></Link><span>Back</span>
                <input type="checkbox" id='checkbox-menu'/>
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
            <main></main>
            <footer>
                <h2>Rafael Lopes de Melo</h2>
                <ul>
                    <li><FaWhatsapp size={40} /></li>
                    <li><FaInstagram size={40} /></li>
                    <li><FaTwitter size={40} /></li>
                    <li><FaGithub size={40} /></li>
                </ul>
            </footer>
        </div>
    )
}