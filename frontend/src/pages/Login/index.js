import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css'

import api from '../../services/api';

export default function AdminForm() {

    const history = useHistory();

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');



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

    

    return(
        <div className="container">

            <main className='login-main'>

                <h1 className='login-h1'>Faça login como admnistrador</h1>

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

                    <button type="submit" onClick = { handleLogin }>Login</button>

                </form>

            </main>

        </div>
    )
}