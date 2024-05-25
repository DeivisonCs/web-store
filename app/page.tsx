import Header from "./components/Header"
import OffersBanner from "./components/OffersBanner"
import ProductCard from "./components/ProductCard"
import Footer from "./components/Footer"
import "./styles.css"

const Home = () => {
    return (
        <>
            <Header/>
            <OffersBanner imgSrc=""/>

            <section id="promotion-section">
                <h2>Promotions</h2>
                
                <div className="product-slide">
                    <ProductCard imgSrc="" name="Product" price="99,99" prevPrice="149,99"/>
                    <ProductCard imgSrc="" name="Product" price="99,99"/>
                    <ProductCard imgSrc="" name="Product" price="99,99" prevPrice="149,99"/>
                    <ProductCard imgSrc="" name="Product" price="99,99" prevPrice="149,99"/>
                    <ProductCard imgSrc="" name="Product" price="99,99" prevPrice="149,99"/>
                    <ProductCard imgSrc="" name="Product" price="99,99" prevPrice="149,99"/>
                    <ProductCard imgSrc="" name="Product" price="99,99" prevPrice="149,99"/>
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default Home
