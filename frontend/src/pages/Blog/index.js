import React from 'react';

import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import DisplayPosts from '../../components/DisplayPosts';

export default function Blog() {

    return (
        <div>

            <NavBar path='' back='/' />

            <DisplayPosts />

            <Footer />

        </div>
    )
}
