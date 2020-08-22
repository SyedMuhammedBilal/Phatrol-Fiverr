import React, { useEffect } from 'react'
import tweet from '../assets/tweet.png'
import AOS from 'aos'
import '../styles/Footer.css'

export default function Footer() {

    useEffect(() => {
        AOS.init({
          duration: 3000
        });
        AOS.refresh();
      });

    return (
        <div className="card-list">
            <section class="text-gray-700 body-font end-cont" data-aos={"fade-up"}>
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <h1 style={{color: 'white', fontSize: '60px', letterSpacing: '4px'}}><i>Contact us!</i>
                        </h1>
                        <p class="leading-relaxed text-lg" style={{fontSize: '19px', letterSpacing: '3px', color: 'white'}}><i>Having <span className="footer-p">issues</span>, <span className="footer-p">question</span></i>, or <span className="footer-p">other concers? Please</span><br /><i> don't hesitate to contact us.</i></p>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block tweet-img" style={{cursor: 'pointer'}} src={tweet} />
                    </div>
                </div>
            </section>
        </div>
    )
}
