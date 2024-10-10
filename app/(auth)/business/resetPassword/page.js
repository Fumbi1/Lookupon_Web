"use client"

import Button from "@/components/button/page";
import Link from "next/link";
import Image from "next/image";
import { ZodErrors } from "@/components/custom/zodErrors/zodErrors";
import { useFormState } from "react-dom";
import { registerUserAction } from "@/components/actions/auth-actions";
import "../../signUp/signUp.css"
import { useState } from "react";

const INITIAL_STATE = {
    data: null,
    zodErrors: null,
    message: null,
}

const ResetPassword = () => {
    const [formState, formAction] = useFormState(registerUserAction, INITIAL_STATE);
    const [submitted, setSubmitted] = useState(false);

    console.log(formState, "client");
    return (
        <form action={formAction}>
            <p className="form-header">Reset Password?</p>

            <input type="password" name="email" placeholder="Enter new password" id="c" />
            <ZodErrors error={formState?.zodErrors?.password} />
            <br />
            <input type="password" name="email" placeholder="Confirm new password" id="c" />
            <ZodErrors error={formState?.zodErrors?.password} />
            <br />


            <Button type="submit" value={ "Reset password"} className={"sign-up-btn"} onClick={() => setSubmitted(true)} />

            <div className="last-part">
                <Link href="/business/signIn">Back to Sign in</Link>
            </div>
        </form>
    );
};

export default ResetPassword;