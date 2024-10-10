"use client"

import { useState } from "react";
import Button from "@/components/button/page";
import Link from "next/link";
import Image from "next/image";
import { ZodErrors } from "@/components/custom/zodErrors/zodErrors";
import { useFormState } from "react-dom"
import { loginUserAction } from "@/components/actions/auth-actions";
import "./registerBusiness.css";

const INITIAL_STATE = {
    data: null,
    zodErrors: null,
    message: null,
}

const RegisterBusiness = () => {
    const [formState, formAction] = useFormState(loginUserAction, INITIAL_STATE);

    console.log(formState, "client");
    return (
        <form action={formAction}>
            <p className="bus-form-header">What is your business name?</p>
            <p className="bus-form-desc">
                We’ll use this to verify your business name has not already been claimed by another owner. A business will come up automatically if it has already been claimed by another user.
            </p>

            <fieldset className="fieldset">
                <legend className="legend">
                    Business Name
                </legend>
                <input type="text" name="businessName" id="one" className="bus-name" placeholder="Hotsoup ‘n’ More"/>
                <ZodErrors error={formState?.zodErrors?.email} />
            </fieldset>
            <br />

            <Button type="submit" value="Sign in" className="sign-up-btn" />
            <div className="last-part">
                <p>Not yet on Lookupon?</p>
                <Link href="/signUp">Sign up</Link>
            </div>
        </form>
    );
};

export default RegisterBusiness;