"use client"

import React, { FC, useState } from "react";
import "./styles.css"

interface InputFieldProps {
    label: string
    type: string
    isRequired: boolean
}

const InputField: React.FC<InputFieldProps> = ({label, type, isRequired}) => {
    const hideIcon = '/icons/hidePasswordIcon.svg'
    const showIcon = '/icons/showPasswordIcon.svg'

    const [passVisibility, setVisibility] = useState(type);
    const [passwordIcon, setPasswordIcon] = useState(showIcon)

    const placeHolder = isRequired?`${label}*`: label

    const changeVisibility = () => {
        setVisibility((prev) => prev==='password'? 'text':'password');
        setPasswordIcon((prev) => prev===showIcon? hideIcon: showIcon);
    }


    return (
        <div className="input-field-component">
            <input placeholder={placeHolder} type={passVisibility} className="input-field"/>
            <span className="active-field-underline"></span>
            
            {type==="password" && <span className="change-visibility" onClick={changeVisibility}><img src={passwordIcon} className="visibility-icon"/></span>}
        </div>
    )
}

export default InputField