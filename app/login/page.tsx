import React from "react"
import Header from "../components/Header"
import InputField from "../components/InputField"
import "./styles.css"
import Link from "next/link"

const LoginPage = () => {

    return(
        <>
        <Header logo={true} searchBar={false} products={false} account={false}/>
        <section id="login-section">
            <form>    
                <InputField label="Email" type="email" isRequired={true}/>

                <InputField label="Password" type="password" isRequired={true}/>

                <div className="login-buttons-div">
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
        </>
    )
}  

export default LoginPage