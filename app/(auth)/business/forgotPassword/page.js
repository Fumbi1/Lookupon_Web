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

const ForgotPassword = () => {
    const [formState, formAction] = useFormState(registerUserAction, INITIAL_STATE);
    const [submitted, setSubmitted] = useState(false);

    console.log(formState, "client");
    return (
        <form action={formAction}>
            <p className="form-header">Forgot Password?</p>
            {!submitted &&
                <p className="form-desc">Enter the email address associated with your <br /> Lookupon business account.</p>
            }
            {submitted &&
                <p className="form-desc">A reset link has been sent to your<br /> email address .</p>
            }

            {!submitted && (<div>
                <input type="email" name="email" placeholder="Email" id="c" />
                <ZodErrors error={formState?.zodErrors?.email} />
            </div>
            )
            }
            <br />


            <Button type="submit" value={!submitted ? "Continue" : "Go to email"} className={"sign-up-btn"} onClick={() => formState === INITIAL_STATE && setSubmitted(true)} />

            <div className="last-part">
                <Link href="/business/signIn">Back to Sign in</Link>
            </div>
        </form>
    );
};

export default ForgotPassword;