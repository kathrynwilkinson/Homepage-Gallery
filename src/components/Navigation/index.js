import React from 'react';
import './style.css';

export default function Navigation () {
    return (
        <div className='nav-wrapper'>
            <div className='nav'>
                <div className='nav-link'>
                    {/* homepage */}
                    Welcome
                </div>
                <div className='nav-link'>
                    Gallery
                </div>
                <div className='nav-link'>
                    Research
                </div>
                <div className='nav-link'>
                    Teaching
                </div>
                <div className='nav-link'>
                    Philosophy
                </div>
                <div className='nav-link'>
                    Blog
                </div>
                <div className='nav-link'>
                    CV
                </div>
            </div>
        </div>
    );
}
