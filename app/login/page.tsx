import React from "react"
import "./styles.css"
import Link from "next/link"

const LoginPage = () => {

    return(
        <section id="login-section">
            <form>
                {/* <label htmlFor="name-input-field">Name</label>
                <input type="text" id="name-input-field"/> */}
                
                <input placeholder="Email*" type="email" id="email-input-field"/>
                <span className="active-field-underline"></span>

                <input placeholder="Password*" type="password" id="password-input-field"/>
                <span className="active-field-underline"></span>

                <div className="buttons-div">
                    <Link href="/" className="return-button">Return</Link>

                    <div className="submit-button-container">
                        <button type="submit" className="submit-button">LogIn</button>
                    </div>
                </div>

                <div className="assistant-access-link">
                    <Link href="/signup">Don't have an account?</Link>
                    <Link href="">Forgot Password?</Link>
                </div>
            </form>
        </section>
    )
}  

export default LoginPage