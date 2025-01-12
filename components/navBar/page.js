"use client";
import Image from "next/image";
import SignInNav from "./SignInNav";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./nav.css";
import Link from "next/link";
import useToggle from "/app/hooks/useToggle";
import useUser from "@/hooks/use-auth";

const Nav = () => {
  const { accessToken } = useUser();

  const isSignedIn = Boolean(accessToken);
  const [state, setState] = useState(isSignedIn);

  useEffect(() => {
    setState(isSignedIn)
  }, [isSignedIn])

  const { switch1, switch2, toggle, toggle2 } = useToggle();

  const route = useRouter();

  // Access current path
  let currentPath = usePathname();

  // Check if it's a specific route
  const isSignUpPage = currentPath === "/signUp";
  const isSignInPage = currentPath === "/signIn";

  return (
    <div>
      {!state ? (
        <SignInNav />
      ) : (
        <div className="nav-wrap">
          <div className="nav-flex">
            <Link href="/" className="logo">
              <Image
                src="/logo.svg"
                width="172"
                height="32"
                alt="omooo"
                layout="responsive"
              />
            </Link>
            <div className="userFn">
              <div className="user-wrap">
                <div className="dropdown-wrap">
                  <div className="business">
                    <div onClick={switch1} className="dropdown-control">
                      <div>
                        <p className="review">Lookupon for business</p>
                      </div>
                      <Image
                        className={toggle ? "rotate" : "rotate0"}
                        src="/expand.svg"
                        width="20"
                        height="20"
                        alt="omooo"
                      />
                    </div>
                    <div className={toggle ? "dropdown" : "dropdown-off"}>
                      <p className="dropdown-list"  onClick={() => route.push("/businessHome")}>Add a business</p>
                      <p
                        className="dropdown-list"
                        onClick={() => route.push("/business/signIn")}
                      >
                        Sign in to business account
                      </p>
                    </div>
                  </div>
                </div>
                <span className="review">Write a review</span>
                <div className="dropdown-wrap">
                  <Image
                    src="/profileImage.svg"
                    alt="User Image"
                    height="40"
                    width="40"
                    onClick={switch2}
                    className={toggle2 ? "rotate2" : "rotate0"}
                  />
                  <div className={toggle2 ? "dropdown2" : "dropdown-off2"}>
                    <p
                      className="dropdown-list"
                      onClick={() => {
                        route.push("/userProfile");
                      }}
                    >
                      Profile
                    </p>
                    <p
                      className="dropdown-list"
                      onClick={() => {
                        route.push("/accountSettings");
                      }}
                    >
                      Account settings
                    </p>
                    <p className="dropdown-list">Sign Out</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
