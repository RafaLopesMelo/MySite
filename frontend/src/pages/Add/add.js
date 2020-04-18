import React from 'react';

import Navbar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';

import './add.css';

import api from '../../services/api';

export default function Add() {

    return (

        <div className='container'>

            <Navbar path="" />

            <main>

                <form className='add-form'>

                    <h2 className='form-title'>Adicionar post</h2>

                        <input 
                            type="text" 
                            placeholder='Autor' 
                            className='author-input'
                            maxLength='22'/>

                        <select className='category-input'> 
                        
                            <option value="webdesign">WebDesign</option>
                            <option value="musica">Música</option>
                            <option value="outros">Outros</option>

                        </select>

                    <input 
                        type="text" 
                        placeholder='Título' 
                        className='title-input'
                        maxLength='25'/>

                    <textarea 
                        className='description-input' 
                        placeholder='Descrição'
                        maxLength='200'
                        cols='4'>
                    </textarea>

                    <input 
                        type="file" 
                        className='illustration-input'/>

                    <textarea 
                        className='content-input' 
                        placeholder='Conteúdo em Markdown'>
                    </textarea>
                        

                </form>

            </main>


            <Footer />
        </div>
    )
}