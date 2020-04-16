import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { MdWatchLater } from 'react-icons/md'

import NavBar from '../../components/NavBar/index';
import Footer from '../../components/Footer/index';

import api from '../../services/api';

import './post.css'


export default function Post() {

    const url = window.location.pathname;

    const [post, setPost] = useState([]);



    useEffect(() => {
        api.get(url)
            .then(response => {
                setPost([response.data])
            })
    })


    return (
        <div className="container">

            <NavBar />

            {post.map(data => (

                    <main>

                        <div className="info">
                            <MdWatchLater color='#2e3339' size={23} />
                            <span> {data.date} </span>
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