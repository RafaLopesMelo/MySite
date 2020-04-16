// ! Revisar margens para tirar overflow-x: hidden do global.css
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa'

import Footer from '../../components/Footer/index'
import NavBar from '../../components/NavBar/index'


import api from '../../services/api';

import './admin.css'

export default function Blog() {

    const [posts, setPosts] = useState([]);

    async function handleDeletePost(id) {

        let result = window.confirm('Tem certeza que deseja excluir este post?')

        if (result) {

            try {

            await api.delete(`admin/posts/${id}`);
            setPosts(posts.filter(post => post.id !== id))

            } catch {

                alert('Erro ao deletar caso, tente novamente.')

            }
        }

    }

    useEffect(() => {
        api.get('/posts')
        .then(response => {
            setPosts(response.data)
        })
    })

    return (
        <div className='container'>

            <NavBar />

            <Link to='admin/posts/add' className='addPost'> Adicionar novo post </Link>

            <main>
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


            <Footer />

        </div>
    )
}