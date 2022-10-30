import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Media from 'react-media';
import Footer from '../components/Footer';


export default function NoMatch() {

  return (
    <div id="error-page">
      <p className='error-404'>404 Error!</p>
      <h1>We can't find that page.</h1>
      <p>Sorry, the page you are looking for doesn't exist.</p>
      <br />

      <div className='error-page-buttons'>
        <Link to='..' relative='path' className='go-back'>
          <span className='go-back-arrow'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          Go back
        </Link>

        <Link to='/' className='take-me-home'>
          Take me home
        </Link>

        <Media 
          query="(min-width: 768px)" 
          render = { () => 
            (
              <div className='error-page-footer'>
                <Footer />
              </div>
            )
          }
        />
      </div>
    </div>
  );
}