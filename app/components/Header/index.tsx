import React from "react"
import Link from "next/link"
import SearchBar from "../SearchBar"
import "./styles.css"

const Header = () => {
    return (
        <section id="header-section">
            <span className="logo-span">
                <img src="/WebStoreLogo.png"/>
            </span>

            <SearchBar/>

            <div>
                {/* Deve aparecer apenas se o usuário não estiver logado  */}
                <Link href="/login">Register/LogIn</Link>
                <img />
            </div>
        </section>
    )
}

export default Header