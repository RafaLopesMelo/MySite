import React, { useState, useEffect } from 'react';


import NavBar from '../../components/NavBar/index';
import Footer from '../../components/Footer/index';

import api from '../../services/api';


export default function Post() {

    const url = window.location.pathname;

    const [post, setPost] = useState([]);

    

useEffect(() => {
    api.get(url)
    .then(response => {
        setPost([response.data])
    })
})


    return(
        <div className="container">

          <NavBar/>

            <main>

            {post.map(data => (

               <div> { data.author } </div>

            ))}

            </main>


            <Footer />

        </div>
    )
} 