import Image from "next/image"
import Link from "next/link"
import "./nav.css"

const NavModal = ({img, close, switch1, toggle}) => {

    return (
        <>
            <div className="nav-close">
                <Image src={img || "error"} alt="X" height={24} width={24} onClick={close}/>
            </div>

            <div className="mobile-user-wrap">
                        <span className="mobile-review">Write a review</span>

                        <div className="mobile-sign-wrap">
                          <Link className="mobile-sign_in" href="/signIn">Sign In</Link>
                          <Link className="mobile-sign_up" href="/signUp">Sign Up</Link>
                        </div>

                        <div className="mobile-dropdown-wrap">
                          <div className="mobile-business">
                            <div onClick={switch1} className="dropdown-control">
                              <div>
                                <p className="mobile-review">Lookupon for business</p>
                              </div>
                              <Image
                                className={toggle ? "rotate" : "rotate0"}
                                src="expand.svg"
                                width="20"
                                height="20"
                                alt="omooo"
                              />
                            </div>
                            <div className={toggle ? "mobile-dropdown" : "dropdown-off"}>
                              <p className="mobile-dropdown-list" onClick={() => route.push("/businessHome")}>Add a business</p>
                              <p className="mobile-dropdown-list" onClick={() => route.push("/business/signIn")}>Sign in to business account</p>
                            </div>
                          </div>
                        </div>
            
                      </div>
        </>
    )
}

export default NavModal