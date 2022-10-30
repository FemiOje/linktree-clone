import React from 'react';
import '../App.css';
import ZuriInternshipLogo from '../images/zuri-internship-logo.png';
import i4gLogo from '../images/i4g-logo.png';

const Footer = () => {
  return (
    <footer>
        <hr />
        <section className='footer-logos'>
            <div className='zuri-internship-logo'>
                <img
                    src={ZuriInternshipLogo}
                    alt='zuri-internship'
                />
            </div>

            <div className='footer-text'>
                <p>HNG Internship 9 Frontend Task</p>
            </div>

            <div className='i4g-logo'>
                <img src={i4gLogo} alt='i4g' />
            </div>
        </section>
    </footer>
  )
}

export default Footer