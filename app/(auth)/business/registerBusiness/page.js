"use client"

import { useState } from "react";
import Button from "@/components/button/page";
import Link from "next/link";
import Image from "next/image";
import { ZodErrors } from "@/components/custom/zodErrors/zodErrors";
import { useFormState } from "react-dom"
import { loginUserAction, registerUserAction } from "@/components/actions/auth-actions";
import { useRouter } from "next/navigation";
import "./registerBusiness.css";

const INITIAL_STATE = {
    data: null,
    zodErrors: null,
    message: null,
}

const RegisterBusiness = () => {
    const [formState, formAction] = useFormState(registerUserAction, INITIAL_STATE);

    console.log(formState, "client");

    const route = useRouter()
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
                <input type="text" name="businessName" id="one" className="bus-name" placeholder="Hotsoup ‘n’ More" />
            </fieldset>
            <ZodErrors error={formState?.zodErrors?.first_name} />
            <br />

            <Button type="submit" value="Continue" className="bus-reg-btn" onClick={() => route.push("./describeBusiness")} />
            
        </form>
    );
};

export default RegisterBusiness;