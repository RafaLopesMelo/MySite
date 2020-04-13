import React from 'react';

import { FaWhatsapp, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'

import './styles.css'

const Footer = props => (

    <footer>
        <h2>Rafael Lopes de Melo</h2>
        <ul>
            <li><FaWhatsapp size={40} /></li>
            <li><FaInstagram size={40} /></li>
            <li><FaTwitter size={40} /></li>
            <li><FaGithub size={40} /></li>
        </ul>
    </footer>

)

export default Footer;