import React from "react";
import Header from "../components/Header"
import "./styles.css";

const ProductPage = () => {
    return(
        <>
            <Header logo={true} searchBar={true} products={false} account={true}/>
        </>
    )
}

export default ProductPage;