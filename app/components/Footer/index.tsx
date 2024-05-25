import React from "react";
import Link from "next/link"
import "./styles.css" 

const Footer = () => {
    return(
        <section id="footer-section">

            <ul className="links-section">
                <li className="link-type-list">
                    <h3>Help</h3>

                    <ul className="link-content">
                        <li><Link href="">Get Help</Link></li>
                        <li><Link href="">Work With Us</Link></li>
                        <li><Link href="">Track Order</Link></li>
                        <li><Link href="">Contact Us</Link></li>
                    </ul>
                </li>

                <li className="link-type-list">
                    <h3>Products</h3>

                    <ul className="link-content">
                        <li><Link href="">Shirts</Link></li>
                        <li><Link href="">Phones</Link></li>
                        <li><Link href="">Smart Watch</Link></li>
                    </ul>
                </li>

                <li className="link-type-list">
                    <h3>Terms</h3>

                    <ul className="link-content">
                        <li><Link href="">Terms of Use</Link></li>
                        <li><Link href="">Privacy Policy</Link></li>
                        <li><Link href="">Terms of Sale</Link></li>
                    </ul>
                </li>
            </ul>
            
            <div className="contacts-section">
                <div className="social-midias">
                    <span><img src="/paymentsMethods/pix_icon.png"/></span>
                    <span><img src="/paymentsMethods/visa_icon.png"/></span>
                    <span><img src="/paymentsMethods/mastercard_icon.png"/></span>
                    <span><img src="/paymentsMethods/elo_icon.png"/></span>
                    <span><img src="/paymentsMethods/dinnersClub_icon.png"/></span>
                </div>

                <span className="owner-signature"></span>
            </div>
            
        </section>
    )
}

export default Footer