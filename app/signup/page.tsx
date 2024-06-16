import React from "react"
import Header from "../components/Header"
import InputField from "../components/InputField"
import "./styles.css"
import Link from "next/link"

const SignUp = () => {

    return(
        <>
        <Header logo={true} searchBar={false} products={false} account={false}/>

        <section id="signup-section">
            <form>
                <InputField label="Name" type="text" isRequired={true}/>
                
                <InputField label="Email" type="email" isRequired={true}/>

                <InputField label="Password" type="password" isRequired={true}/>

                <div className="signup-buttons-div">
                    <Link href="/" className="return-button">Return</Link>

                    <div className="submit-button-container">
                        <button type="submit" className="submit-button">Create Account</button>
                    </div>
                </div>

                <div className="assistant-access-link">
                    <Link href="/login">Already have an account?</Link>
                </div>
            </form>
        </section>
        </>
    )
}  

export default SignUp