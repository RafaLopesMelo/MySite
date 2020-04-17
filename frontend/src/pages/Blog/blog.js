// ! Revisar margens para tirar overflow-x: hidden do global.css
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer/index'
import NavBar from '../../components/NavBar/index'

import api from '../../services/api';

import './blog.css'

export default function Blog() {

    const [posts, setPosts] = useState([]);
    
    const url = window.location.pathname;
    const query = window.location.search;
      
    useEffect(() => {
        api.get(url + query)
        .then(response => {
        setPosts(response.data)
        })
    })

    return (
        <div className='container'>

            <NavBar path=''/>

            <main>
                { posts.map(post => (

                    <div className='post-container' key={post.id}>
                        <div className='illustration' style={{ backgroundImage:  post.illustration  }}></div>
                            
                        
                        <div className='text'>

                            <Link to={ `posts/${post.id}` } className='title'>{ post.title }</Link>
                            <div className="description"><>{ post.description }</></div>
                            <div className="date"><>{ post.date }</></div>

                        </div>

                </div>))}

            </main>


            <Footer />

        </div>
    )
}
