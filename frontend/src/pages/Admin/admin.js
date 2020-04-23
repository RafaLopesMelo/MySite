// ! Revisar margens para tirar overflow-x: hidden do global.css
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';

import Footer from '../../components/Footer/footer';
import NavBar from '../../components/NavBar/navbar';
import BackNextButton from '../../components/BackNextButton/index';

import api from '../../services/api';

import './admin.css'

export default function Blog() {

    const [posts, setPosts] = useState([]);

    const url = window.location.pathname;
    const query = window.location.search;

    const jwt = localStorage.getItem('jwt');

    const [ counter, setCounter ] = useState();

    async function handleDeletePost(id) {

        const result = window.confirm('Tem certeza que deseja excluir este post?');

        if (result) {

            try {

            await api.delete(`admin/posts/${id}`, {
                headers: {
                    'x-access-token': jwt
            }});
            setPosts(posts.filter(post => post.id !== id))

            } catch {

                alert('Erro ao deletar caso, tente novamente.')

            }
        }

    }
      
    useEffect(() => {
        api.get(url + query, {
            headers: {
                'x-access-token': jwt
        }})
        .then(response => {
        setPosts(response.data)
        setCounter(response.headers.counter)  
        })
    }, [ jwt, query, url ]) 
    
    return (
        <div className='container'>

            <NavBar path='/admin' back='/'/>

            <Link to='/admin/add' className='addPost'> Adicionar novo post </Link>

            <main className='main-admin'>
                { posts.map(post => (

                    <div className='post-container' key={post.id}>
                        <div className='illustration' style={{ backgroundImage:  post.illustration  }}></div>


                        <div className='text'>

                            <div className='info'>
                            <Link to={ `posts/${post.id}` } className='title'> { post.title } </Link>
                            <FaTrash className='trash' size = { 20 } color='rgb(228, 34, 34)' onClick= { () => handleDeletePost(post.id) } />
                            <Link> <FaEdit size = { 20 }  color= 'rgb(110, 110, 233)' /> </Link>
                            </div>
                            <div className="description"><>{ post.description }</></div>
                            <div className="date"><>{ post.date }</></div>

                        </div>

                </div>))}

            </main>

            <BackNextButton counter = { counter }/>

            <Footer />

        </div>
    )
}