import React from 'react';

import Navbar from '../../components/NavBar';
import Form from '../../components/Form';
import Footer from '../../components/Footer';

export default function Add() {

    return (

        <div className='container'>

            <Navbar path="" back='/admin/posts'/>

            <Form />

            <Footer />
        </div>
    )
}