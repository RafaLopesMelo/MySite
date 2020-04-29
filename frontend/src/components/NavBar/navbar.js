import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeftCircle } from 'react-icons/fi';

import './navbar.css';
import { useState } from 'react';

export default function NavBar(props) {

    

    const [ show, setShow ] = useState(true);

    function toggle() {

        const menuList = document.querySelector('.menu-list');

        menuList.classList.toggle("on", show);
        setShow(!show);

    }

    return (

        <nav className="navbar">

            <div className="navbar-left-container">


                <Link to={props.back}>
                    <FiArrowLeftCircle className='back-arrow' />
                    <span className='back-arrow-text'>Back</span>
                </Link>

            </div>

            <div className="menu-list">
                <ul>
                    <li> <Link to={props.path + '/posts'}> >Home </Link> </li>
                    <li> <Link to={props.path + '/posts?category=webdesign'} > >Web Design </Link></li>
                    <li> <Link to={props.path + '/posts?category=musica'}> >Música </Link></li>
                    <li> <Link to={props.path + '/posts?category=outros'}> >Outros </Link></li>
                </ul>

                <div className="menu-toggle" onClick={toggle}>
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>

            </div>
        </nav>
    )
}
