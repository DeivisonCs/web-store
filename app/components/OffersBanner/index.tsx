import React from "react"
import "./styles.css"

interface BannerProps {
    imgUrl: string;
}

const OffersBanner: React.FC<BannerProps> = ({imgUrl}) => {
    return(
        <section id="offers-banner-section">
            <div className="offers-banner">
                <img src=""/>
            </div>

            <div className="banner-nav-div">
                <span className="banner-nav"></span>
                <span className="banner-nav activated"></span>
                <span className="banner-nav"></span>
            </div>
        </section>
    )
}

export default OffersBanner