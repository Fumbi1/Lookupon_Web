"use client"

import { useState } from "react";
import Button from "@/components/button/page";
import { businessCategories } from "@/app/utils/arrays";
import Link from "next/link";
import Image from "next/image";
import { ZodErrors } from "@/components/custom/zodErrors/zodErrors";
import { useFormState } from "react-dom"
import { loginUserAction, registerUserAction } from "@/components/actions/auth-actions";
import { useRouter } from "next/navigation";
import "./busDesc.css";

const INITIAL_STATE = {
    data: null,
    zodErrors: null,
    message: null,
}

const RegisterBusiness = () => {
    const [formState, formAction] = useFormState(registerUserAction, INITIAL_STATE);
    const [catInput, setCatInput] = useState([])
    const [error, setError] = useState("")
    const [dropDown, setDropown] = useState(false);

    console.log(formState, "client");

    const route = useRouter();

    //to add to the business category list
    const getValue = (val) => {
        (!catInput.includes(val) && catInput.length !== 3) && setCatInput([].concat(val, catInput))
        catInput.length === 3 && setError("You can only select a maximum of three categories")
    }

    //to remove from the business category list
    const removeValue = (val) => {
        setCatInput(catInput.filter(input => input !== val))
        catInput.length <= 3 && setError("")
    }

    const onSubmit = () => {
        catInput.length === 0? setError("Input is empty") : route.push("./businessMail")
    }

    return (
        <form action={formAction}>
            <p className="bus-form-header">Describe your business</p>
            <p className="bus-form-desc">
                Choose at most three categories that best describe your business.
            </p>

            <fieldset className="fieldset">
                <legend className="legend">
                    Business Categories
                </legend>

                <div className="select-div">
                    {catInput.length === 0 ? <p className="select">Choose business category</p>:
                        <div class="input-position">
                            <div className="input-wrap">
                                {catInput?.map((input, i) => {
                                    return <div className="selected-div" key={i}>
                                        <p type="text"  className="input-name">{input}</p>
                                        <Image
                                            onClick={() => removeValue(input)}
                                            src={"/cancel.svg"}
                                            width={10.5}
                                            height={10.5}
                                            alt=".."
                                        />
                                    </div>
                                })}
                            </div>
                        </div>}

                    <Image
                        src="/expand.svg"
                        width="24"
                        height="24"
                        alt="omooo"
                        onClick={() => setDropown(!dropDown)}
                    />
                </div>
            </fieldset>

            <p className="error">{error}</p>


            {dropDown &&
                <div className="bus-categories">
                    {businessCategories.map((category, i) => {
                        return <div key={i}>
                            <p className={catInput.includes(category) ? "bus-cat-select" : "bus-cat"} onClick={() => getValue(category)}>{category}</p>
                        </div>
                    }
                    )}
                </div>}
            <br />

            <Button type="submit" value="Continue" className="bus-reg-btn" onClick={onSubmit}/>
            <Button type="submit" value="Go Back" className="bus-reg-btn2" onClick={() => route.back(-1)} />
            
        </form>
    );
};

export default RegisterBusiness;