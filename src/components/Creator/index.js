import React from 'react';
import './index.css';

export default function Creator () {
    return (
        <div>
            <footer>
                <div className='footer-wrapper-1'>
                    <div className='copyright footer-text'>
                        &copy; K WILKINSON 2021
                </div>
                    <div className='term-of-use'>
                        <a href='' className='footer-text' target='_blank' rel='noreferrer'>TERMS OF USE</a>
                    </div>
                    <div class='privacy-policy'>
                        <a href='' className='footer-text' target='_blank' rel='noreferrer'>PRIVACY POLICY</a>
                    </div>
                    <div class='contact'>
                        <a href='' className='footer-text' target='_blank' rel='noreferrer'>CONTACT</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
