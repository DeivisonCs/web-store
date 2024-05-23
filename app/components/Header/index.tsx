import React from "react"
import Link from "next/link"
import SearchBar from "../SearchBar"
import "./styles.css"

const Header = () => {
    return (
        <section id="header-section">
            <div id="logo-div">
                Logo/Name
            </div>

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