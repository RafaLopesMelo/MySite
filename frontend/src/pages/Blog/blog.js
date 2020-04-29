import React, { useState, useEffect } from 'react';

import Footer from '../../components/Footer/index';
import NavBar from '../../components/NavBar/navbar';
import BackNextButton from '../../components/BackNextButton/index';
import DisplayPosts from '../../components/DisplayPosts/index';

import api from '../../services/api';

import './blog.css';

export default function Blog() {


    const [posts, setPosts] = useState([]);
    
    const [ counter, setCounter ] = useState();
    
    const url = window.location.pathname;
    const query = window.location.search;

    

    const jwt = localStorage.getItem('jwt');
      
    useEffect(() => {
        api.get(url + query, {
            headers: {
                'x-access-token': jwt
            }
        })
        .then(response => {
        setPosts(response.data)
        setCounter(response.headers.counter)  
        })

    }, [ jwt, query, url ])

    

    return (
        <div className='container'>

            <NavBar path='' back='/'/>

            <main>
                { posts.map(post => (

                    <DisplayPosts post={ post }/> 

                ))}

            </main>

            <BackNextButton counter = { counter }/>

            <Footer/>

        </div>
    )
}
