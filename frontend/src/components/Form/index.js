import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

export default function Form() {

    const [ author, setAuthor ] = useState('');
    const [ category, setCategory ] = useState('webdesign');
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');   
    const [ illustration, setIllustration ] = useState('');
    const [ content, setContent ] = useState('');

    const history = useHistory();

    
    function toBase64(file) {

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = function() {

            setIllustration(`url('${reader.result}')`);
    
        }

    };

    async function HandleNewPost(e) {
        e.preventDefault();

        const data = {
            author,
            category,
            title,
            description,
            illustration,
            content
        }

        try {

            const jwt = localStorage.getItem('jwt');

            await api.post('/admin/posts', data, {
                headers: {
                    'x-access-token': jwt
            }})
            history.push('/admin/posts')

        } catch {

            alert('Erro ao cadastrar caso, tente novamente mais tarde.')

        }

    }

    return ( 
        <main>

        <form className='add-form' onSubmit = { HandleNewPost }>

            <h2 className='form-title'>Adicionar post</h2>
            <input 
                    type="text" 
                    placeholder='Autor' 
                    value = { author }
                    onChange = { e => setAuthor(e.target.value) }
                    className='author-input'
                    maxLength='22'/>

                <select 
                    className='category-input' 
                    value = { category } 
                    onChange = { e => setCategory(e.target.value) }> 
                
                    <option value="webdesign">WebDesign</option>
                    <option value="musica">Música</option>
                    <option value="outros">Outros</option>

                </select>

            <input 
                type="text" 
                placeholder='Título' 
                value = { title }
                onChange = { e => setTitle(e.target.value) }
                className='title-input'
                maxLength='25'/>

            <textarea 
                className='description-input' 
                placeholder='Descrição'
                value = { description }
                onChange = { e => setDescription(e.target.value) }
                maxLength='200'
                cols='4'>
            </textarea>

            <input 
                type='file'
                onChange = { e => toBase64(e.target.files[0]) }
                className='illustration-input'
                id='getFile'
                />

            <textarea 
                className='content-input' 
                placeholder='Conteúdo em Markdown'
                value = { content }
                onChange = { e => setContent(e.target.value) }>
            </textarea>

            <button type="submit" className='btn-create-post'>Criar Post</button>

        </form>

    </main> 
    )
}
