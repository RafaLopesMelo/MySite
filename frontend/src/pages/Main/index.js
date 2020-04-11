import React from 'react';
import { Link } from 'react-router-dom';

import eu from '../../assets/Foto.png';

import './styles.css';

export default function Main() {


    return (
        <div className='main-container'>
            <div className='left-container'>
                <img src= { eu } alt="Eu" />
                <h2 className='devweb'>Desenvolvedor Web</h2>
                <h2 className='js'>Programador JavaScript</h2>
                <h2 className='fs'>Full-stack</h2>
            </div>
            <div className='right-container'>

                <div className="nome">
                    <h1 className='Rafael'>Rafael</h1>
                    <h1 className='Lopes'>Lopes</h1>
                    <h1 className='Melo'>Melo<span>_</span></h1>
                </div>

                <div className="menu">
                    <Link to='/portfolio'><a data-text='//Portfólio' className='portfolio'>//Portfólio</a><br/></Link>
                    <Link to='/blog'><a data-text='//Blog' className='blog'>//Blog</a><br/></Link>
                    <Link to='/contato'><a data-text='//Contato' className='contato'>//Contato</a></Link>
                </div>

            </div>
        </div>
    );
}