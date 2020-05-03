import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import DisplayPosts from '../../components/DisplayPosts'

import api from '../../services/api';


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

        <div>

            <NavBar path='/admin' back='/'/>

            <Link to='/admin/add' className='addPost'> Adicionar novo post </Link>

            <DisplayPosts delete = { handleDeletePost }/>

            <Footer />

        </div>
    )
}