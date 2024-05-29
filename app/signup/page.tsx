import React from "react"
import "./styles.css"
import Link from "next/link"

const SignUp = () => {

    return(
        <section id="login-section">
            <form>
                <input placeholder="Name*" type="text" id="name-input-field"/>
                <span className="active-field-underline"></span>
                
                <input placeholder="Email*" type="email" id="email-input-field"/>
                <span className="active-field-underline"></span>

                <input placeholder="Password*" type="password" id="password-input-field"/>
                <span className="active-field-underline"></span>

                <div className="buttons-div">
                    <Link href="/" className="return-button">Return</Link>

                    <div className="submit-button-container">
                        <button type="submit" className="submit-button">Create Account</button>
                    </div>
                </div>
            </form>
        </section>
    )
}  

export default SignUp