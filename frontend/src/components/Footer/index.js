import React from 'react';

import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

import './styles.css'

export default function Footer() {

    return (
        <footer>
            <h2>Rafael Lopes de Melo</h2>
            <ul>
                <li><a href="https://www.linkedin.com/in/rafael-lopes-de-melo-4506a81a5/"><FaLinkedin size={'8em'} /></a></li>
                <li><a href="https://www.instagram.com/rafa.lopesmelo/"><FaInstagram size={'8em'} /></a></li>
                <li><a href="https://twitter.com/RafaScriptMelo"><FaTwitter size={'8em'} /></a></li>
                <li><a href="https://github.com/RafaLopesMelo"><FaGithub size={'8em'} /></a></li>
            </ul>
        </footer>
    )

}

