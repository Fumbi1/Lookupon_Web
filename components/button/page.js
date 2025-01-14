"use client"

import { useFormStatus } from "react-dom";

const Button = ({value, className, onClick, type}) => {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} className={className} onClick={onClick} type={type}>{pending? "Loading..." : value }</button>
    );
}

export default Button;