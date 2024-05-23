import React from "react"
import "./styles.css"

const SearchBar = () => {
    return (
        <div id="search-bar-content">
            <button type="submit"><img src="/icons/searchIcon.svg" alt="search icon"/></button>

            <input type="text" placeholder="Search..."/>
        </div>
    )
}

export default SearchBar