import React from "react"
import Link from "next/link"
import SearchBar from "../SearchBar"
import "./styles.css"

interface HeaderProps {
    logo: boolean
    searchBar: boolean
    products: boolean
    account: boolean
}

const Header: React.FC<HeaderProps> = ({logo, searchBar, products, account}) => {
    return (
        <section id="header-section">
            {logo &&
            <span className="logo-span">
                <Link href="/"><img src="/WebStoreLogo.png"/></Link>
            </span>}

            {searchBar && <SearchBar/>}

            <div className="interaction-links profile">
                <nav className="navegation">
                    {products && <Link href="/products" id="link-to-products">Products</Link>}

                    {/* Deve aparecer apenas se o usuário não estiver logado  */}
                    { account && <Link href="/login">Register/LogIn</Link>}
                </nav>

                <img />
            </div>
        </section>
    )
}

export default Header