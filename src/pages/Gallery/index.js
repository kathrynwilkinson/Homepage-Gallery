import './style.css';
import React from 'react';
import artwork from '../../data/artwork/gallery.json';

export default function Gallery () {
    return (
        <div className='page-body' id='gallery-page'>
			<div className='page-header'>Gallery</div>
            <div id='gallery-card-container'>
                {/* GalleryCards are appended here */}

            </div>
        </div>
    );
}
