import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import StripeCheckout from 'react-stripe-checkout'
import Pic from '../assets/gen2.png'
import "../styles/Header.css"

export default function Header() {

    useEffect(() => {
        AOS.init({
          duration: 2000
        });
        AOS.refresh();
      });

    const [product] = useState({ price: 120 })

    function handleToken ( token, addresses ) {
        console.log(token, addresses)
    }

    return (
        <div>
            <section className="text-gray-700 body-font overflow-hidden">
                <div className="container px-6 py-24 mx-auto">
                <div className="lg:w-4/2 mx-auto flex flex-wrap" data-aos={"fade-right"}>
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                    <h2 className="text-gray-900 text-5xl title-font font-medium mb-4" style={{color: 'white', letterSpacing: '3px'}}>Welcome to</h2>
                    <center><h1 className="text-gray-900 text-6xl title-font font-large heads" style={{
                        fontWeight: 600,
                        letterSpacing: '7px'
                    }}><i>Phatrol</i></h1></center>
                    <br />
                    <p style={{color: 'white', letterSpacing: '2px', fontSize: '17px'}} className="leading-relaxed mb-4"><i>The <b className="bold">ULTIMATE GENERATOR</b>, with our product<br />generate the <b className="bold2">cheapest</b> emails for use in raffles and more!</i></p>
                    </div>
                    <img data-aos={"fade-left"} alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-60" src={Pic} />
                </div>
                </div>
                <div className="stripe-btn">
                    <StripeCheckout 
                        stripeKey="pk_test_Qgpqt50JprDs8hGswGfbLaqY002c09diU2"
                        token={handleToken}
                        amount={product.price * 100}
                    />
                </div>
            </section>
        </div>
    )
}
