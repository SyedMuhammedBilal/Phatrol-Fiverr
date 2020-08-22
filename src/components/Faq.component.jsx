import React, { useEffect } from 'react'
import AOS from 'aos'
import '../styles/Faq.css'
import add from '../assets/add.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Faq() {

    useEffect(() => {
        AOS.init({
          duration: 1000
        });
        AOS.refresh();
      });

    return (
        <div className="cards-list1">
            <div className="dropdown">
                <a href="#" className="dropdown-toggle">How much does Phatrol Cost?<img className="font-icons add-bg" src={add} style={{width: 30, height: 30, marginLeft: '85%', marginTop: '-7.5%'}} /></a>
                <ul className="dropdown-menu">
                    <li>The retail price is €80 and you must then renew every month at €15 for updates and more. Lifetime copies retail at €120.</li>
                </ul>
            </div>
            <div className="dropdown">
                <a href="#" className="dropdown-toggle">Do you do Groupbuys? <img className="font-icons add-bg" src={add} style={{width: 30, height: 30, marginLeft: '85%', marginTop: '-7.5%'}} /></a>
                <ul className="dropdown-menu">
                    <li>To enquire about a potential groupbuy, contact us via Twitter <b>@Phatrol</b></li>
                </ul>
            </div>
            <div className="dropdown">
                <a href="#" className="dropdown-toggle">Payment Method? <img className="font-icons add-bg" src={add} style={{width: 30, height: 30, marginLeft: '85%', marginTop: '-7.5%'}} /></a>
                <ul className="dropdown-menu">
                    <li>We accept all major credit/debit cards.</li>
                </ul>
            </div>
            <div className="dropdown">
                <a href="#" className="dropdown-toggle">Operating System? <img className="font-icons add-bg" src={add} style={{width: 30, height: 30, marginLeft: '85%', marginTop: '-7.5%'}} /></a>
                <ul className="dropdown-menu">
                    <li>We currently only support Windows and macOS.
                    </li>
                </ul>
            </div>
            <div className="dropdown">
                <a href="#" className="dropdown-toggle">Does Phatrol offer customer support?<img className="font-icons add-bg" src={add} style={{width: 30, height: 30, marginLeft: '85%', marginTop: '-7.5%'}} /></a>
                <ul className="dropdown-menu">
                    <li>Every member of Phatrol is entitled to 24/7 support from our dedicated team through a platform called Discord</li>
                </ul>
            </div>
            <div className="dropdown">
                <a href="#" className="dropdown-toggle">When will you restock? <img className="font-icons add-bg" src={add} style={{width: 30, height: 30, marginLeft: '85%', marginTop: '-7.5%'}} /></a>
                <ul className="dropdown-menu">
                    <li>We restock very limited copies randomly about once a month. We recommend that you follow us on Twitter to be notified when we restock.</li>
                </ul>
            </div>
        </div>
    )
}
