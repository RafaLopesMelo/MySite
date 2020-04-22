import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { MdWatchLater } from 'react-icons/md'

import NavBar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';

import api from '../../services/api';

import './post.css'


export default function Post() {

    const jwt = localStorage.getItem('jwt');

    const url = window.location.pathname;

    const [post, setPost] = useState([]);

    

    useEffect(() => {

        api.get(url, {
            headers: {
                "x-access-token": jwt
            }
        })
            .then(response => {
                setPost([response.data])
            })
    })


    return (
        <div className="container">

            <NavBar path='' back='/posts'/>

            {post.map(data => (

                    <main>

                        <div className="author-date">
                        <span>
                            <MdWatchLater color='#2e3339' size={23} className='clock'/>
                             {data.date} 
                        </span>
                            <span> Autor: {data.author} </span>
                        </div>

                        <div className="content">

                            <h1 className='title'> {data.title} </h1>

                            <ReactMarkdown source = { data.content } />

                        </div>



                    </main>))}

            <Footer />

        </div>
    )
} 