import React, { FC } from "react";
import "./styles.css"

interface InputFieldProps {
    label: string
    type: string
    isRequired: boolean
}

const InputField: React.FC<InputFieldProps> = ({label, type, isRequired}) => {
    const placeHolder = isRequired?`${label}*`: label

    return (
        <>
            <input placeholder={placeHolder} type={type} className="input-field-component"/>
            <span className="active-field-underline"></span>
        </>
    )
}

export default InputField