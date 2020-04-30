import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import './styles.css';

export default function BackNextButton(props) {

    const UrlParams = new URLSearchParams(window.location.search);
    const history = useHistory();
    const url = window.location.pathname;

    var numPages;

    const counter = props.counter;
    
    const page = UrlParams.get('page') == null ? 1 : parseInt(UrlParams.get('page'))

    if ( counter <= 10) {

        numPages = 1;

    } else if ( counter > 10 && counter % 10 !== 0 ) {

        numPages = parseInt(counter / 10) + 1;

    } else if ( counter > 10 && counter % 10 === 0 ) {

        numPages = counter / 10

    }

    useEffect(() => {

        page === 1 
            ? document.querySelector('.back').style.color = 'rgba(0, 0, 0, 0.1)' 
            : document.querySelector('.back').style.color = 'rgb(0, 0, 0)'

        page === numPages 
            ? document.querySelector('.next').style.color = 'rgba(0, 0, 0, 0.1)'
            : document.querySelector('.next').style.color = 'rgb(0, 0, 0)'

    }, [ page, numPages ])


    return (

        <div className='back-next'>

            <FaArrowLeft className='back' onClick={() => page > 1 && history.push(`${url}?page=${page - 1}`)} />

            <FaArrowRight className='next' onClick={() => page < numPages && history.push(`${url}?page=${page + 1}`)} />

        </div>

    )
}

