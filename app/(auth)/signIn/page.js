"use client";

import Button from "@/components/button/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getUserProfile } from "@/libs/actions/profile.action";
import { ZodErrors } from "@/components/custom/zodErrors/zodErrors";
import { useFormState } from "react-dom";
import { loginUserAction } from "@/components/actions/auth-actions";
import "./signIn.css";
import useUser from "@/hooks/use-auth";
import { useCallback, useEffect } from "react";

const INITIAL_STATE = {
  data: null,
  token: null,
  zodErrors: null,
  message: null,
  response: null,
};

const SignInRoute = () => {
  const { accessToken, setAccessToken, user, setUser } = useUser()
  const [formState, formAction] = useFormState(loginUserAction, INITIAL_STATE);

  const route = useRouter();

  // Handle successful login
  // First block - handle token from form submission
useEffect(() => {
  if (formState.token) {
    setAccessToken(formState.token);
    console.log(formState.response)
  }
}, [formState.token]); // Only depends on formState.token

// Second block - handle profile loading
useEffect(() => {
  const loadProfile = async () => {
    if (!accessToken) return;
    try {
      const profile = await getUserProfile(accessToken);
      console.log('profile:', profile);
      console.log(accessToken)
      setUser(profile);
    } catch (error) {
      console.error('Failed to load profile:', error);
    }
  };

  if (accessToken) {
    loadProfile();
    route.replace("/home");
  }
}, [accessToken]); // Only depends on accessToken changes
 

  console.log(formState, "client");
  return (
    <form action={formAction}>
      <p className="form-header">Welcome back</p>
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

      <input className="login-input" type="email" name="email" placeholder="Email" id="c" />
      <ZodErrors error={formState?.zodErrors?.email} />
      <br />
      <input className="login-input" type="password" name="password" placeholder="Password" id="d" />
      <ZodErrors error={formState?.zodErrors?.password} />
      <br />

      <Button type="submit" value="Sign in" className="sign-up-btn" />
      <div className="login-last-part">
        <p>Not yet on Lookupon?</p>
        <Link href="/signUp">Sign up</Link>
      </div>
    </form>
  );
};

export default SignInRoute;
