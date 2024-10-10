import Image from "next/image"
import { catalogueImages } from "@/app/utils/arrays";
import "./catalogue.css"

const Catalogue = ({images, activeImage, onClick, closeIcon}) => {
    return (
        <div class="position-wrap">
            <div className="main-flex-wrap">
                <div className="active-image">
                    <div className="container">
                        <Image src={activeImage} width={874} height={575} alt="food image" layout="responsive"/>
                    </div>
                </div>
                <div className="catalogue-wrap">
                    <div class="close-div">
                        <p className="cat-title">Stirfy Spaghetti Deluxe</p>
                        <Image src={"/close.svg"} width={32} height={32} alt="X" onClick={closeIcon}/>
                    </div>
                    <p className="cat-price">NGN 4,000</p>
                    <p className="cat-details">One serving of stirfry spaghetti, one chicken lap, and a Coke</p>
                    <div className="catalogue-flex">
                        {
                            images.map((image, i) => {
                                return (
                                    <div className="catalogue-images-flex" key={i}>
                                        <Image src={image} alt={"food images"} width={"202"} height={"141"} onClick={onClick}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalogue;