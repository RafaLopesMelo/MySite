import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function DisplayPosts(props) {

    return (

        <div className='post-container' key={props.post.id}>
            <div className='illustration' style={{ backgroundImage: props.post.illustration }}></div>

            

            <div className="date"><>{props.post.date}</></div>

            <div className='text'>

            <Link to={`posts/${props.id}`} className='title'>{props.post.title}</Link>
                <div className="description"><>{props.post.description}</></div>

            </div>

        </div>

    )

}