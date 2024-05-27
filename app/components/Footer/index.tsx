import React from "react";
import Link from "next/link"
import "./styles.css" 

const Footer = () => {
    return(
        <section id="footer-section">

            <div className="links-section">

                <div className="link-type-list">
                    <h3>Help</h3>

                    <ul className="link-content">
                        <li><Link href="">Get Help</Link></li>
                        <li><Link href="">Work With Us</Link></li>
                        <li><Link href="">Track Order</Link></li>
                        <li><Link href="">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="link-type-list">
                    <h3>Products</h3>

                    <ul className="link-content">
                        <li><Link href="">Shirts</Link></li>
                        <li><Link href="">Phones</Link></li>
                        <li><Link href="">Smart Watch</Link></li>
                    </ul>
                </div>

                <div className="link-type-list">
                    <h3>Terms</h3>

                    <ul className="link-content">
                        <li><Link href="">Terms of Use</Link></li>
                        <li><Link href="">Privacy Policy</Link></li>
                        <li><Link href="">Terms of Sale</Link></li>
                    </ul>
                </div>
            </div>
            
            <div className="extra-info-section">
                <div>
                    <h3>Social</h3>
                    <div className="social-media extra-info">
                        <Link href=""><img src="/socialMedia/github_icon.svg"/></Link>
                        <Link href=""><img src="/socialMedia/email_icon.svg"/></Link>
                        <Link href=""><img src="/socialMedia/linkedin_icon.svg"/></Link>
                    </div>
                </div>

                <div>
                    <h3>Payment Methods</h3>
                    <div className="payment-methods extra-info">
                        <span><img src="/paymentsMethods/visa_icon.png"/></span>
                        <span><img src="/paymentsMethods/mastercard_icon.png"/></span>
                        <span><img src="/paymentsMethods/elo_icon.png"/></span>
                        <span><img src="/paymentsMethods/dinnersClub_icon.png"/></span>
                        <span><img src="/paymentsMethods/pix_icon.png"/></span>
                    </div>
                </div>  
            </div>
            
            <span className="owner-signature">Deivison Santos</span>
        </section>
    )
}

export default Footer