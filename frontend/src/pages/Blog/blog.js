import React, { useState, useEffect } from 'react';

import Footer from '../../components/Footer/index';
import NavBar from '../../components/NavBar/navbar';
import BackNextButton from '../../components/BackNextButton/index';
import DisplayPosts from '../../components/DisplayPosts/index';

import './styles.css';

import api from '../../services/api';

export default function Blog() {


    const [posts, setPosts] = useState([]);

    const [counter, setCounter] = useState();

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

    }, [jwt, query, url])



    return (
        <div>

            <NavBar path='' back='/' />

            <div className="posts-organization">

                {posts.map(post => (

                    <DisplayPosts post={post} />

                ))}


            </div>

            <BackNextButton counter={counter} className="BackNextButton"/>

            <Footer />

        </div>
    )
}
