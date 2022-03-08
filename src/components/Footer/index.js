import React from 'react';
import './style.css';
import Contact from '../Contact';
import Creator from '../Creator';

export default function Footer () {
    return (
        <div>
            <div className='footer'>
                <Contact />
                <Creator />
            </div>
        </div>
    );
}
