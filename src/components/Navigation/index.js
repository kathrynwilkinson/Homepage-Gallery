import React from 'react';
import './index.css';

export default function Navigation () {
    return (
        <div className='nav-wrapper'>
            <div className='nav'>
                <div className='nav-link'>
                    Welcome
                </div>
                <div className='nav-link'>
                    Philosophy
                </div>
                <div className='nav-link'>
                    CV
                </div>
                <div className='nav-link'>
                    Teaching
                </div>
                <div className='nav-link'>
                    Research
                </div>
                <div className='nav-link'>
                    Blog
                </div>
            </div>
        </div>
    );
}
