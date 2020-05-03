import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';

import BackNextButton from '../../components/BackNextButton/index';

import './styles.css';

import api from '../../services/api'

export default function DisplayPosts(props) {

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

        <>

        <div className='posts-organization'>

            {posts.map(post => (

            <div className='post-container' key={post.id}>

                <div className='illustration'>
                    <img src={post.illustration} alt="illustration" />
                </div>
                <div className="date"><>{post.date}</></div>

                <div className='text'>

                    <Link to={`posts/${post.id}`} className='title'>{post.title}</Link>
                    <div className="description"><>{post.description}</></div>

                </div>

                {url === '/posts' &&

                    <div className="icons">
                        <FaTrash className="trash" color='rgb(228, 34, 34)' onClick= { props.handleDeletePosts }/>
                        <Link> <FaEdit className="edit" color='rgb(110, 110, 233)' /> </Link>
                    </div>

                }

            </div>))}

        </div>

        <BackNextButton counter={counter} className="BackNextButton"/>

        </>

    )

}