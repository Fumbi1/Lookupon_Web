"use client"

import Image from "next/image";
import "./domain.css";
import Button from "@/components/button/page";
import Review from "@/components/reviewSection/page";
import EditModal from "@/components/editModal/edit";
import { openingHours } from "@/app/utils/arrays";
import Catalogue from "@/components/catalogue/page";
import { catalogueImages } from "@/app/utils/arrays";
import { useState, useEffect } from "react";

function BusinessDomain() {
  const [catalog, setCatalog] = useState(false)
  const [modalType, setModalType] = useState("")
  const [modal, setModal] = useState(false)
  const [editBusiness, setEditBusiness] = useState({
    description: "",
    business_photos: [
      // "/frame1.svg",
      // "/frame2.svg",
      // "/frame3.svg",
      // "/frame4.svg",
      // "/frame5.svg",
    ],
    catalog: []
  })
  const [imagee, setImagee] = useState(catalogueImages[0]);
  const [catImg, setCatImg] = useState([
    // "/stacked-card.svg",
    // "/stacked-card-1.svg",
    // "/stacked-card-2.svg",
    // "/stacked-card-3.svg",
  ])

  const focusedImage = (e) => {
    let currentImage = e.target.src;
    setImagee(currentImage);
    console.log(currentImage)
  }

  const saveDesc = (e) => {
    const text = e.target.value;
    setEditBusiness(prev =>({
      ...prev,
      description: text
    }))
  }

  const selectedPhotos = (e) => {
    const files = Array.from(e.target.files);
    // If you need URLs to display the images
    const fileUrls = files.map(file => URL.createObjectURL(file));

    console.log(files);

    setEditBusiness(prevState => ({
      ...prevState,
      business_photos: [...fileUrls, ...prevState.business_photos]
    }));
  };

  useEffect(() => {
    console.log(editBusiness.business_photos)
  }, [editBusiness])

  const onClickEffect = () => {
    setModalType("Add photo")
    setModal(true)
  }

  const onClickEffect2 = () => {
    setModalType("Description")
    setModal(true)
  }

  const onClickEffect3  = () => {
    setModalType("Business Hours")
    setModal(true)
  }

  return (
    <main className="main">

      {
        modal && (
          <div className="edit-modal">
            <EditModal Header={modalType} onChange={selectedPhotos} textUpdate={saveDesc} saveModal={() => setModal(false)}/>
          </div>
        )
      }

      {
        catalog &&
        <div className="catalogue-wrap">
          <div className='catalogue-modal'>
          </div>
          <Catalogue images={catalogueImages} activeImage={imagee} onClick={focusedImage} closeIcon={() => setCatalog(false)} />
        </div>
      }
      <div className="header">
        <Image
          src="/businessImage.svg"
          alt="Image not found"
          width="240"
          height="240"
        />
        <div>
          <p className="titlee">Hotsoup ‘n’ More</p>
          <p className="rating">4.5 (57 reviews)</p>
          <p className="varieties">
            Stir-fry Spaghetti, Noodles, Burgers, Swallow
          </p>
          <p className="time">Open 10:00 AM - 07:00 PM</p>
          <div className="claim">
            <Image src="/check.svg" alt="check mark" width="16" height="16" />
            <p className="time">Claimed</p>
          </div>
        </div>
      </div>

      <div className="buttons-wrapper">
        <Button className="review-btn" value="Write a Review" />

        <div>
          <Button className="share-btn" value="Share" />
        </div>

        <div>
          <Button className="call-btn" value="Call" />
        </div>

        <Button className="web-btn" value="Website" />
      </div>

      <hr className="line" />

      <div className="side-wrap">
        <div className="left-wrapper">
          <div className="business-desc">
            <div className="custom-wrap">
              <p className="desc-title">Description</p>
              <p className="openn" onClick={onClickEffect2}>Edit description</p>
            </div>
            <p className={editBusiness.description === "" ? "desc-content-empty" : "desc-content"}>
              {...editBusiness.description || "No description"}
            </p>
          </div>
          <hr className="line2" />

          <div className="photos">
            <div className="photos-wrap">
              <div className="custom-wrap">
                <p className="desc-title">Business Photos ({editBusiness.business_photos.length})</p>
                <p className="openn" onClick={onClickEffect}>Add photo</p>
              </div>
              <div className={editBusiness.business_photos.length !== 0 ? "business-photos" : "desc-content-empty"}>
                {editBusiness.business_photos.length !== 0 ? editBusiness.business_photos.map((image, key) => {
                  return <Image src={image} alt="food" height="112" width="152" key={key} />
                }) : "No photos"
                }
              </div>
            </div>
            <hr className="line2" />

            <div className="photos-wrap">
              <div className="custom-wrap">
                <p className="desc-title">Catalogue</p>
                <p className="openn">Add item</p>
              </div>

              <div className={catImg.length !== 0 ? "custom-wrap" : "desc-content-empty"}>
                {catImg.length !== 0 ?
                  catImg.map((frontImage, i) => {
                    return <Image
                      src={frontImage}
                      key={i}
                      alt="food"
                      height="178"
                      width="178"
                      onClick={() => setCatalog(true)}
                    />
                  }) : "No items"
                }
              </div>
            </div>
          </div>
          <hr className="line2" />
          <div className="comments-wrap">
            <div className="review">
              <p className="review-p">Reviews</p>
              <div className="filter-div">
                <label htmlFor="">Filter:</label>
                <select name="" id="">
                  <option value="">All Ratings</option>
                  <option value=""> greater than 4.5</option>
                  <option value="">3.5 - 4.5</option>
                  <option value="">2.5 - 3.5</option>
                </select>
              </div>
            </div>
            <div className="ratings-n-reviews">
              <div className="ratings">
                <p className="overall">Overall rating</p>
                <div>(Stars)</div>
                <p className="review-no">57 Reviews</p>{" "}
                {/* update the state of the value here*/}
              </div>
              <div className="ratings-flex">
                <div className="specific-rating-flex">
                  <p>5.0 (26)</p>
                  <div className="rating-bar">
                    <div className="rating-overlay"></div>
                  </div>
                </div>
                <div className="specific-rating-flex">
                  <p>4.0 (0)</p>
                  <div className="rating-bar">
                    <div className="rating-overlay"></div>
                  </div>
                </div>
                <div className="specific-rating-flex">
                  <p>3.0 (24)</p>
                  <div className="rating-bar">
                    <div className="rating-overlay"></div>
                  </div>
                </div>
                <div className="specific-rating-flex">
                  <p>2.0 (7)</p>
                  <div className="rating-bar">
                    <div className="rating-overlay"></div>
                  </div>
                </div>
                <div className="specific-rating-flex">
                  <p>1.0 (0)</p>
                  <div className="rating-bar">
                    <div className="rating-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="customer_review">
            <Review />
          </div>
        </div>

        <div className="right-wrapper">
          <div>
            {/* <p className="location">Location</p>
            <Image src={"/map.svg"} width={"328"} height={"317"} alt="map" /> */}

            {/* <p className="hour">Hour</p> */}

            <div className="bus-time-header">
              <p className="table-hr">
                Business Hours
              </p>
              <p className="table-edit" onClick={onClickEffect3}>
                Edit
              </p>
            </div>

            <table className="table">
              <tbody>
                {openingHours?.map((session, index) => {
                  return (
                    <tr className="opening-timee" key={index}>
                      <td className="locationn">{session.day}</td>
                      <td className="time-rangee">{session.time_range}</td>
                      <td className="openn">{session.open}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BusinessDomain;
