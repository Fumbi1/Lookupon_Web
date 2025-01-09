"use client"

import { useState } from "react";
import Button from "@/components/button/page";
import { ZodErrors } from "@/components/custom/zodErrors/zodErrors";
import { useFormState } from "react-dom"
import { loginUserAction, registerUserAction } from "@/components/actions/auth-actions";
import { useRouter } from "next/navigation";
import "./busMail.css";

const INITIAL_STATE = {
    data: null,
    zodErrors: null,
    message: null,
}

const BusinessMail = () => {
    const [formState, formAction] = useFormState(registerUserAction, INITIAL_STATE);

    console.log(formState, "client");

    const route = useRouter();

    const onSubmit = () => {
        route.push("./businessNumber")
    }


    return (
        <form action={formAction}>
            <p className="bus-form-header">What is your business email address?</p>
            <p className="bus-form-desc">
                We’ll send notifications such as reviews from customers to it. The email address will not be shared or displayed publicly.
            </p>

            <fieldset className="fieldset">
                <legend className="legend">
                    Business Categories
                </legend>
                <input type="email" name="businessMail" id="one" className="bus-name" placeholder="hotsoupnmore@gmail.com" />
            </fieldset>
            <ZodErrors error={formState?.zodErrors?.email} />

            <br />

            <Button type="submit" value="Continue" className="bus-reg-btn" onClick={onSubmit} />
            <Button type="submit" value="Go Back" className="bus-reg-btn2" onClick={() => route.back(-1)} />
            {/* <div className="last-part">
                <p>Not yet on Lookupon?</p>
                <Link href="/signUp">Sign up</Link>
            </div> */}
        </form>
    );
};

export default BusinessMail;