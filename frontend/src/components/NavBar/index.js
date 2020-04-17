import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeftCircle } from 'react-icons/fi';

import './styles.css';

export default function NavBar(props) { 

    return(
        
    <nav>

        <Link to='/' className='link'><FiArrowLeftCircle  className='back-arrow' /><span className='exit'>Exit</span></Link>
        <input type="checkbox" id='checkbox-menu'/>
        <label htmlFor='checkbox-menu'>
            <span></span>
            <span></span>
            <span></span>
        </label>

        <h2>Menu</h2>
        <div className='line'></div>
        <ul>
            <li> <Link to= { props.path + '/posts' }> >Home </Link> </li>
            <li> <Link to= { props.path +'/posts?category=webdesign'} > >Web Design </Link></li>
            <li> <Link to={ props.path +'/posts?category=musica'}> >Música </Link></li>
            <li> <Link to={ props.path +'/posts?category=outros'}> >Outros </Link></li>
        </ul>
    </nav>
    )
}
