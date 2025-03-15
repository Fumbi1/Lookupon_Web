"use client";
import Image from "next/image";
import "./nav.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useToggle from "/app/hooks/useToggle";
import NavModal from "./navModal";

const SignInNav = () => {
  const { switch1, switch2, toggle, toggle2 } = useToggle();
  const [ navState, setNavState ] = useState(false);
  const route = useRouter();

  const DropDown = () => {
    setNavState(!navState)
  }

  return (
    <div className="nav-wrap">

      <div className={navState? "nav-drop-wrap": "nav-drop-inactive"}>
        <NavModal img={"/close.svg"} close={DropDown} switch1={switch1} toggle={toggle}/>
      </div>

      <div className="nav-flex">
        <Link href="/" className="logo">
          <Image src="/logo.svg" width="172" height="32" alt="omooo" layout="responsive" />
        </Link>
        <div className="userFn">
          <div className="user-wrap">
            <span className="review">Write a review</span>
            <div className="dropdown-wrap">
              <div className="business">
                <div onClick={switch1} className="dropdown-control">
                  <div>
                    <p className="review">Lookupon for business</p>
                  </div>
                  <Image
                    className={toggle ? "rotate" : "rotate0"}
                    src="expand.svg"
                    width="20"
                    height="20"
                    alt="omooo"
                  />
                </div>
                <div className={toggle ? "dropdown" : "dropdown-off"}>
                  <p className="dropdown-list" onClick={() => route.push("/businessHome")}>Add a business</p>
                  <p className="dropdown-list" onClick={() => route.push("/business/signIn")}>Sign in to business account</p>
                </div>
              </div>
            </div>

            <div className="sign-wrap">
              <Link className="sign_in" href="/signIn">Sign In</Link>
              <Link className="sign_up" href="/signUp">Sign Up</Link>
            </div>

            <div className="burger-div">
              <Image src={'/menu-line-horizontal.svg'} width={24} height={24} alt="nav" onClick={DropDown} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInNav;
