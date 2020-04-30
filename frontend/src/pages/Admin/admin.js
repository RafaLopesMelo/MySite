import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer/index';
import NavBar from '../../components/NavBar/navbar';
import DisplayPosts from '../../components/DisplayPosts/index'

import api from '../../services/api';

import './admin.css'

export default function Blog() {

    const [posts, setPosts] = useState([]);

    const jwt = localStorage.getItem('jwt');

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
      
    return (

        <div className='container'>

            <NavBar path='/admin' back='/'/>

            <Link to='/admin/add' className='addPost'> Adicionar novo post </Link>

            <DisplayPosts />

            <Footer />

        </div>
    )
}