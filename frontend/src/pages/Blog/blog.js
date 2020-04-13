import React from 'react';

import Footer from '../../components/Footer/index'
import NavBar from '../../components/NavBar/index'

import './blog.css'

export default function Blog() {

    return (
        <div className='container'>

            <NavBar />
            
            <main>

                <div className='post-container'> 
                    <div className='illustration'><h1 style={{ margin:'auto' }}> Image Test </h1></div>
                    <div className='text'>
                        <div className='title'>Title test</div>
                        <div className="description">Description test </div>
                        <div className="date">Date Test</div>
                    </div>
                </div>
                <div className='post-container'> 
                    <div className='illustration'><h1 style={{ margin:'auto' }}> Image Test </h1></div>
                    <div className='text'>
                        <div className='title'>Title test</div>
                        <div className="description">Description test </div>
                        <div className="date">Date Test</div>
                    </div>
                </div>
                <div className='post-container'> 
                    <div className='illustration'><h1 style={{ margin:'auto' }}> Image Test </h1></div>
                    <div className='text'>
                        <div className='title'>Title test</div>
                        <div className="description">Description test </div>
                        <div className="date">Date Test</div>
                    </div>
                </div>
            </main>


            <Footer />

        </div>
    )
}