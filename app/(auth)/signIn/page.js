"use client"

import Button from "@/components/button/page";
import Link from "next/link";
import Image from "next/image";
import { ZodErrors } from "@/components/custom/zodErrors/zodErrors";
import { useFormState } from "react-dom"
import { loginUserAction } from "@/components/actions/auth-actions";
import "./signIn.css";

const INITIAL_STATE = {
  data: null,
  zodErrors: null,
  message: null,
}

const SignInRoute = () => {
  const [formState, formAction] = useFormState(loginUserAction, INITIAL_STATE);

  console.log(formState, "client");
  return (
    <form action={formAction}>
      <p className="form-header">Welcome back</p>
      <p className="form-desc">Connect with local businesses around you.</p>
      <div className="button-wrap">
        <Image src="/googleIcon.svg" width="18" height="18" className="google-icon"alt="google" />
        <Button value="Continue with Google" className="alt-signIn" onClick={null} />
      </div>

      <div className="line-wrap">
        <hr className="hr"/>
        <p>or</p>
        <hr className="hr"/>
      </div>
      
      <input type="email" name="email" placeholder="Email" id="c" />
      <ZodErrors error={formState?.zodErrors?.email}/>
      <br />
      <input type="password" name="password" placeholder="Password" id="d" />
      <ZodErrors error={formState?.zodErrors?.password}/><br />

      <Button type="submit" value="Sign in" className="sign-up-btn" />
      <div className="last-part">
        <p>Not yet on Lookupon?</p>
        <Link href="/signUp">Sign up</Link>
      </div>
    </form>
  );
};

export default SignInRoute;