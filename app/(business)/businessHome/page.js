import Image from "next/image";
import Button from "@/components/button/page";
import "./businessHome.css"

const BusinessHomePage = () => {
    return (
        <div>
            <p className="business-intro">Start, <span className="distinct">Grow </span>and Advertise your</p>
            <p className="business-introo"> local <span className="distinct">business</span></p>
            <p className="business-desc">Connect with customers and grow your business.</p>

            <div className="business-slider">
                <Image src={"businessHome.svg"} width={1120} height={400} alt="slider" layout="responsive" />
            </div>

            <div>
                <div className="business-desc-flex">
                    <div className="bus-desc-left">
                        <p className="preamble">Lookupon makes it easy to connect with customers and grow your business</p>

                        <div className="tick-flex">
                            <div className="tick-div">
                                <Image src={"tick.svg"} width={24} height={24} alt="tick" layout="responsive" />
                            </div>
                            <p className="lists">Sign Up</p>
                        </div>
                        <div className="tick-flex">
                            <div className="tick-div">
                                <Image src={"tick.svg"} width={24} height={24} alt="tick" layout="responsive" />
                            </div>
                            <p className="lists">Add business info</p>
                        </div>

                        <div className="tick-flex">
                            <div className="tick-div">
                                <Image src={"tick.svg"} width={24} height={24} alt="tick" layout="responsive" />
                            </div>
                            <p className="lists">Unlock your free webpage</p>
                        </div>

                        <div className="tick-flex">
                            <div className="tick-div">
                                <Image src={"tick.svg"} width={24} height={24} alt="tick" layout="responsive" />
                            </div>
                            <p className="lists">Connect with customers</p>
                        </div>

                        <Button value={"Sign Up"} className={"business-sign-up"} onClick={null} type={"submit"} />
                    </div>
                    <div>
                        <Image src={"imagedemo2.svg"} width={469} height={403} alt="slider" layout="responsive" />
                    </div>
                </div>

                <div className="business-desc-flex">
                    <div className="bus-desc-left">
                        <p className="preamble">Boost your visibility with Lookupon</p>

                        <p className="lists">Strengthening your online presence with Lookupon is the key to building trust with prospective customers.</p>

                        <div className="tick-flex">
                            <div className="tick-div">
                                <Image src={"tick.svg"} width={24} height={24} alt="tick" layout="responsive" />
                            </div>
                            <p className="lists">Elevate your business with better discoverability</p>
                        </div>

                        <div className="tick-flex">
                            <div className="tick-div">
                                <Image src={"tick.svg"} width={24} height={24} alt="tick" layout="responsive" />
                            </div>
                            <p className="lists">Swiftly engage with reviews from your customers</p>
                        </div>

                        <div className="tick-flex">
                            <div className="tick-div">
                                <Image src={"tick.svg"} width={24} height={24} alt="tick" layout="responsive" />
                            </div>
                            <p className="lists">Add images to highlight your offerings</p>
                        </div>

                        <Button value={"Sign Up"} className={"business-sign-up"} onClick={null} type={"submit"} />
                    </div>
                    <div>
                        <Image src={"imagedemo1.svg"} width={299} height={406} alt="slider" layout="responsive" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BusinessHomePage;