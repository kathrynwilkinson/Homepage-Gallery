import './style.css';
import React from 'react';


export default function GalleryCard ({title, id}) {
    return (
        <div className='gallery-card'>
            <div className='thumbnail'></div>
            <div className='thumb-info'>Title</div>
        </div>
    );
}
