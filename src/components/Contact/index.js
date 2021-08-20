import React from 'react';
import './index.css';
import email from '../../images/email.png'

export default function Contact () {
    return (
        <div className='contact-link-wrapper'>
            {/* <div>Contact: Linda Helmick</div> */}
            <img className='mail-icon' alt='' src={email} />
            <img className='mail-icon' alt='' src={email} />
            <img className='mail-icon' alt='' src={email} />
        </div>
    );
}
