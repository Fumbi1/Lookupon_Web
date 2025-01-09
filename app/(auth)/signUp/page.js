"use client";

import Button from "@/components/button/page";
import Link from "next/link";
import Image from "next/image";
import { ZodErrors } from "@/components/custom/zodErrors/zodErrors";
import { useFormState } from "react-dom";
import { registerUserAction } from "@/components/actions/auth-actions";
import "./signUp.css";

const INITIAL_STATE = {
  data: null,
  zodErrors: null,
  message: null,
};

const SignUpRoute = () => {
  const [formState, formAction] = useFormState(
    registerUserAction,
    INITIAL_STATE
  );

  console.log(formState, "client");

  return (
    <form action={formAction}>
      <p className="form-header">Join Lookupon</p>
      <p className="form-desc">Connect with local businesses around you.</p>
      <div className="button-wrap">
        <Image
          src="/googleIcon.svg"
          width="18"
          height="18"
          className="google-icon"
          alt="google"
        />
        <Button
          value="Continue with Google"
          className="alt-signIn"
          onClick={null}
        />
      </div>

      <div className="line-wrap">
        <hr className="hr" />
        <p>or</p>
        <hr className="hr" />
      </div>
      <div className="row-input">
        <div className="name-wrap">
          <input type="text" name="firstname" placeholder="First Name" id="a" />
          <ZodErrors error={formState?.zodErrors?.first_name} />
        </div>

        <div className="name-wrap">
          <input type="text" name="lastname" placeholder="Last Name" id="b" />
          <ZodErrors error={formState?.zodErrors?.last_name} />
        </div>
      </div>
      <input type="email" name="email" placeholder="Email" id="c" />
      <ZodErrors error={formState?.zodErrors?.email} />
      <br />
      <input type="password" name="password" placeholder="Password" id="d" />
      <ZodErrors error={formState?.zodErrors?.password} />
      <br />

      <Button type="submit" value="Sign up" className="sign-up-btn" />
      <div className="last-part">
        <p>Already on Lookupon?</p>
        <Link href="/signIn">Sign in</Link>
      </div>
    </form>
  );
};

export default SignUpRoute;
