import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './adminform.css'

import api from '../../services/api';

export default function AdminForm(props) {

    const history = useHistory();

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');

    async function handleFunction() {

        if(props.action === 'login') {
           return handleLogin();
        }
        return handleRegister();
    }

    async function handleLogin(e) {

        e.preventDefault()

        const LoginData = {user, password}

        try{

            await api.post('/login', LoginData)
            .then(response => localStorage.setItem('token', response.data.token))

            history.push('/admin/posts')

        } catch {
            alert('Erro ao logar, tente novamente')
        }
    }

    async function handleRegister(e) {

    }

    return(
        <div className="container">

            <main className='login-main'>

                <h1 className='login-h1'>Login como administrador</h1>

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