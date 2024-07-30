import React from 'react';
import '../styles/css/styles.css';
import BrightzoneLogo from '../imgs/brightzoneLogo.png';
import SearchButton from '../imgs/searchIcon.svg';


export default function Header() {
  return (
    <div className="header">
      <div className='nav-bar'>
        <div className='logo-box'><a href='#'>
          <img className='logo' src={BrightzoneLogo} alt='brightzone'></img>
          </a>
        </div>

        <div className='category-box'>
          <div className='category'>
            <a href='#'>Man</a>
          </div>
          <div className='category'>
            <a href='#'>Woman</a>
          </div>
          <div className='category'>
            <a href='#'>Boy</a>
          </div>
          <div className='category'>
            <a href='#'>Girl</a>
          </div>
          <div className='category'>
            <a href='#'>Sports</a>
          </div>
          <div className='category'>
            <a href='#'>Brands</a>
          </div>
          <div className='category'>
            <a href='#'>Equipment</a>
          </div>
        </div>
      </div>

      <div class="search-container">
        <form className='search-form'>
          <input type="text" placeholder="Search for equipment..." name="search"></input>
          <button className='searchButton' type="submit"><img className='searchIcon' src={SearchButton}></img></button>
        </form>
      </div>
    </div>
  );
}

