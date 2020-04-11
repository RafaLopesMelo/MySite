import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeftCircle } from 'react-icons/fi';

import './styles.css'

export default function Contact() {

    return (
        <div className='contact-container'>
            <nav className='nav-contact'>
                <FiArrowLeftCircle  size = { 40 } className='back-arrow'/>
            </nav>
            <main className='main-contact'>
                <div className='fale-comigo'>
                    <h1>Fale Comigo!</h1>
                </div>
                <aside className='contatos'>
                    <h1>Contatos:</h1>
                </aside>
            </main>
            <footer className='footer-contact'></footer>
        </div>
    )
}