import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer/footer'

import { FiArrowLeftCircle } from 'react-icons/fi';

import './contact.css'

export default function Contact() {

    return (
        <div className='container'>
            <nav>
                <Link to='/'><FiArrowLeftCircle  size = { 40 } className='back-arrow'/></Link><span>Back</span>
                <h1 className='nav-title'>Contato</h1>
            </nav>
            <main className='main-contact'>
                <div className='fale-comigo'>
                    <h1>Fale Comigo!</h1>
                    <p>Entrar em contato comigo é simples, caso queira ou precise falar comigo, seja para proposta, sugestão, dúvida,
                        etc, sinta-se a vontade para entrar em contato comigo por qualquer rede social ao lado.
                    </p>
                    <p>Sempre estarei disponível para atender meus clientes e leitores do blog!</p>
                    <p>Por favor, dê preferência ao contato via e-mail!</p>
                </div>
                <aside className='contatos'>
                    <h1>Contatos:</h1>
                    <ul>
                        <li>E-mail: <a href='mailto: rafaelmelo.programmer@gmail.com'>rafaelmelo.programmer@gmail.com</a></li>
                        <li>WhatsApp: (11)96720-4747</li>
                        <li>Instagram: <a href='https://www.instagram.com/rafa.lopesmelo/'>rafa.lopesmelo</a></li>
                        <li>Twitter: <a href='https://twitter.com/RafaScriptMelo'>@RafaScriptMelo</a></li>
                        <li>GitHub: <a href='https://github.com/RafaLopesMelo'>RafaLopesMelo</a></li>
                        <li>LinkedIn: <a href='https://www.linkedin.com/in/rafael-lopes-de-melo-4506a81a5'>Rafael Lopes de Melo</a></li>
                    </ul>
                </aside>
            </main>

            <Footer />

        </div>
    )
}