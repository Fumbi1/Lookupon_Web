"use client"

import "./footer.css";
import Image from "next/image"
import { useRouter } from "next/navigation";

const Footer = () => {

  const route = useRouter();

  return (
    <div className="footer-wrap">
        <div className="footer-content">
            <Image style={{cursor: "pointer"}} onClick={() => {route.push("/")}} src="/logoDark.svg" width="174" height="32" alt="omooo"/>
            <div className="social-icons">
            <Image src="/social_media.svg" width="56" height="56" alt="omooo"/>
            <Image src="/social_media-1.svg" width="56" height="56" alt="omooo"/>
            <Image src="/social_media-2.svg" width="56" height="56" alt="omooo"/>
            </div>
            <p className="link" onClick={() => {route.push("/businessHome")}}>
            Lookupon for Business
            </p>
        </div>
        <p className="copyright">Copyright © 2024 Lookupon</p>
    </div>
  )
};
export default Footer;
