import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './adminform.css'

import api from '../../services/api';

export default function AdminForm(props) {

    const history = useHistory();

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');

    async function handleFunction(e) {
        e.preventDefault();

        if(props.action === 'login') {
           return handleLogin();
        }
        return handleRegister();
    }

    async function handleLogin() {

        const LoginData = {user, password}

        try{

            await api.post('/login', LoginData)
            .then(response => localStorage.setItem('jwt', response.data.token))

            history.push('/admin/posts')

        } catch {
            alert('Erro ao logar, tente novamente')
        }
    }

    async function handleRegister() {

        const RegisterData = { user, password }
        const jwt = localStorage.getItem('jwt')

        try {

            await api.post('/admin/register', RegisterData, {
                headers: {
                    'x-access-token': jwt,
                    'Content-Type': 'application/json'
            }})

            history.push('/admin/posts')
            alert('Administrador cadastrado com sucesso!')

        } catch {

            alert('Erro ao cadastrar administrador, tente novamente.')

        }
    }

    return(
        <div className="container">

            <main className='login-main'>

                <h1 className='login-h1'>{ props.text }</h1>

                <form className='login-form'>

                    <label className='login'>
                        Usuário:
                        <input 
                        type="text" 
                        maxLength='16'
                        value = { user }
                        onChange = {e => setUser(e.target.value)}
                        /> 
                    </label>
                    
                    <label className='login'>
                        Senha:
                        <input 
                            type="password" 
                            maxLength='16'
                            value = { password }
                            onChange = { e => setPassword(e.target.value)}
                            /> 
                    </label>

                    <button type="submit" onClick = { handleFunction }>Login</button>

                </form>

            </main>

        </div>
    )
}