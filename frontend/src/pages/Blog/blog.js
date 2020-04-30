import React from 'react';

import Footer from '../../components/Footer/index';
import NavBar from '../../components/NavBar/navbar';
import DisplayPosts from '../../components/DisplayPosts/index';

export default function Blog() {

    return (
        <div>

            <NavBar path='' back='/' />

            <DisplayPosts />

            <Footer />

        </div>
    )
}
