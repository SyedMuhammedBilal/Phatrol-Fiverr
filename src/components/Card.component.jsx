import React, { useEffect } from 'react';
import AOS from 'aos'
import "../styles/Card.css"
import brain from "../assets/brain.png"
import location from "../assets/location.png"
import cloud from "../assets/cloud.png"
import inbox from "../assets/inbox.png"
import mouse from "../assets/mouse.png"
import recycle from "../assets/recycle.png"

export default function Card() {

    useEffect(() => {
        AOS.init({
          duration: 3000
        });
        AOS.refresh();
      });

    return (
        <div class="cards-list" data-aos={"fade-up"}>
            
            <div class="card 1">
            <div class="card_title title-white">
            <span className="icon add-icon-bg"><img alt="brain" src={brain} /></span>
                <p className="para">Unfilterable</p>
                <p style={{color: '#cccccc', fontSize: '16px', display: 'flex', alignItems: 'center'}}>Email generated avoid filtering on raffles. with best name and surname combinations</p>
            </div>
            </div>

            <div class="card 2">
            <div class="card_title title-white">
            <span className="icon add-icon-bg"><img alt="location" src={location} /></span>
                <p className="para">Affordable</p>
                <p style={{color: '#cccccc', fontSize: '16px', display: 'flex', alignItems: 'center', }}>Generate lifetime unbannable accounts as low as 0.5€</p>
            </div>
            </div>

            <div class="card 3">
            <div class="card_title title-white">
            <span className="icon add-icon-bg"><img alt="mouse" src={mouse} /></span>
                <p className="para">Fully Automatic</p>
                <p style={{color: '#cccccc', fontSize: '15px', display: 'flex', alignItems: 'center'}}>Accounts ready with simple click receive unread emails from each account in your inbox</p>
            </div>
            </div>
            
            <div class="card 4">
            <div class="card_title title-white">
            <span className="icon add-icon-bg"><img alt="inbox" src={inbox} /></span>
                <p className="para">Mass Inbox</p>
                <p style={{color: '#cccccc', fontSize: '16px', display: 'flex', alignItems: 'center'}}>Receive unread emails from every accounts directly to your inbox</p>
            </div>
            </div>
            <div class="card 4">
            <div class="card_title title-white">
            <span className="icon add-icon-bg"><img alt="recycle" src={recycle} /></span>
                <p className="para">Captcha Bypass</p>
                <p style={{color: '#cccccc', fontSize: '16px', display: 'flex', alignItems: 'center'}}>Captcha solving is now completely automatic</p>
            </div>
            </div>
            <div class="card 4">
            <div class="card_title title-white">
            <span className="icon add-icon-bg"><img alt="cloud" src={cloud} /></span>
                <p className="para">Proxyless</p>
                <p style={{color: '#cccccc', fontSize: '16px', display: 'flex', alignItems: 'center'}}>No more proxies need to generate Emails</p>
            </div>
            </div>

        </div>
    )
}
