import React, { useEffect } from 'react'
import '../styles/Navbar.css'
import AOS from 'aos'
import logo from '../assets/phatrol.png'

  export default function ButtonAppBar(props) {
    
    const { changeSelection } = props;

      useEffect(() => {
            AOS.init({
              duration: 2000
            });
            AOS.refresh();
          });
  
    return (
        <>
        <header>
        <div class="contai">
            <div class="logo-box">
            <a href="/">
                <img src={logo} alt="logo" style={{width: 80, height: 75}} />
            </a>
            </div>
            <nav>
            <label data-aos={"fade-up"} style={{letterSpacing: '8px'}}><i>Phatrol</i></label>
            <ul data-aos={"fade-left"}>
            <li><a href="#myHeader">Features</a></li>
            <li><a href="#myCard" >Why us?</a></li>
            <li><a href="#myFAQ" >FAQ</a></li>
            <li><a href='#myFooter' >Contact</a></li>
        </ul>
        </nav>
        </div>
        </header>
        </>
      
    );
  }