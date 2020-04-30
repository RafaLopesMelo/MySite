import React from 'react';
import { Link } from 'react-router-dom';

import eu from '../../assets/Foto.png';

import './main.css';

export default function Main() {


    return (

        <div className='main-container'>

            <div className='left-container'>
                <img src= { eu } alt="Eu" className="eu"/>
                <h2 className='devweb'>Desenvolvedor Web</h2>
                <h2 className='js'>Programador JavaScript</h2>
                <h2 className='fs'>Full-stack</h2>
            </div>

            <div className='right-container'>
                <Link to='/login'><strong> Login </strong></Link>
        
                <div className="nome">
                    <h1 className='Rafael'>Rafael</h1>
                    <h1 className='Lopes'>Lopes</h1>
                    <h1 className='Melo'>Melo<span className='animated-underline'>_</span></h1>
                </div>

                <div className="menu">
                    <a data-text='//Portfólio' className='portfolio' href='https://github.com/RafaLopesMelo'>//Portfólio</a><br/>
                    <a data-text='//Blog' className='blog' href="/posts">//Blog</a><br/>
                    <a data-text='//Contato' className='contato' href="/contato">//Contato</a>
                </div>

            </div>
        </div>

    );
}