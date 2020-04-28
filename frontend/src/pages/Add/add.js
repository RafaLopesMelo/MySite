import React from 'react';

import Navbar from '../../components/NavBar/navbar';
import Form from '../../components/Form/form';
import Footer from '../../components/Footer/index';

export default function Add() {

    return (

        <div className='container'>

            <Navbar path="" back='/admin/posts'/>

            <Form />

            <Footer />
        </div>
    )
}