import './style.css';
import React from 'react';


export default function GalleryCard ({title, id, src, alt}) {
    return (
        <div className='gallery-card'>
            <img id={id} className='thumbnail' src={src} alt={alt+title}/>
            <div className='thumb-info painting-titles'>{title}</div>
        </div>
    );
}
