import React from 'react';

import Navbar from '../../components/NavBar/navbar';
import Form from '../../components/Form/form';
import Footer from '../../components/Footer/footer';

import './add.css';

import api from '../../services/api';

export default function Add() {

    return (

        <div className='container'>

            <Navbar path="" />

            <Form />

            <Footer />
        </div>
    )
}