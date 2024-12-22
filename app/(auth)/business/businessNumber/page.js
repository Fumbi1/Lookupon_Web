"use client"

import { useState } from "react";
import Button from "@/components/button/page";
import { ZodErrors } from "@/components/custom/zodErrors/zodErrors";
import { useFormState } from "react-dom"
import { loginUserAction, registerUserAction } from "@/components/actions/auth-actions";
import { useRouter } from "next/navigation";
import "./busNum.css";

const INITIAL_STATE = {
    data: null,
    zodErrors: null,
    message: null,
}

const BusinessNumber = () => {
    const [formState, formAction] = useFormState(registerUserAction, INITIAL_STATE);

    console.log(formState, "client");

    const [verifyNumber, setVerifyNumber] = useState("not verified")

    const route = useRouter();

    const onSubmit = () => {
        setVerifyNumber("verifying process")
    }

    const onVerify = () => {
        setVerifyNumber("Verify with code")
    }


    return (
        <form action={formAction}>
            {verifyNumber === "not verified" && (<div>
                <p className="bus-form-header">Give your customers a way to reach you</p>
                <p className="bus-form-desc">
                    Add your business phone number to help customers connect with you. We will also use this phone number to verify your account.
                </p>
                <fieldset className="fieldset">
                    <legend className="legend">
                        Business Categories
                    </legend>
                    <input type="number" name="businessNUmber" id="one" className="bus-name" placeholder="08084473829" />
                </fieldset>
                {/* <ZodErrors error={formState?.zodErrors?.number} /> */}
                <br />
                <Button type="submit" value="Continue" className="bus-reg-btn" onClick={onSubmit} />
                <Button type="submit" value="Go Back" className="bus-reg-btn2" onClick={() => route.back(-1)} />
            </div>)}


            {
                verifyNumber === "verifying process" &&
                (
                    <div>
                        <p className="bus-form-header">Verify phone number</p>
                        <p className="bus-form-desc">
                            We will proceed to verify this phone number by sending a verification code via SMS.
                        </p>

                        <fieldset className="fieldset">
                            <legend className="legend">
                                Business Categories
                            </legend>
                            <input type="number" name="businessNumber" id="one" className="bus-name" placeholder="08084473829" />
                        </fieldset>
                        {/* <ZodErrors error={formState?.zodErrors?.number} /> */}

                        <br />

                        <Button type="submit" value="Verify phone number" className="bus-reg-btn" onClick={onVerify} />
                        <Button type="submit" value="Go Back" className="bus-reg-btn2" onClick={() => setVerifyNumber("not verified")} />
                    </div>
                )
            }

            {
                verifyNumber === "Verify with code" &&
                (
                    <div>
                        <p className="bus-form-header">Enter the code sent to 08084473829</p>
                        <p className="bus-form-desc">
                            We just sent you an SMS with the verification code. Enter it below to verify your phone number.
                        </p>

                        <fieldset className="fieldset">
                            <legend className="legend">
                                Verification Code
                            </legend>
                            <input type="number" name="businessNUmber" id="one" className="bus-name" placeholder="765546" />
                        </fieldset>
                        {/* <ZodErrors error={formState?.zodErrors?.number} /> */}

                        <br />

                        <Button type="submit" value="Verify phone number" className="bus-reg-btn" onClick={onSubmit} />
                        <Button type="submit" value="Go Back" className="bus-reg-btn2" onClick={() => setVerifyNumber("verifying process")} />
                    </div>
                )
            }
        </form>

    );
};

export default BusinessNumber;