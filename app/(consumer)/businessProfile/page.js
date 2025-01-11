"use client"

import Image from "next/image";
import "./businessProfile.css";
import Button from "@/components/button/page";
import Review from "@/components/reviewSection/page";
import { openingHours } from "@/app/utils/arrays";
import Catalogue from "@/components/catalogue/page";
import { catalogueImages } from "@/app/utils/arrays";
import { useState } from "react";

function BusinessProfile() {
  const [catalog, setCatalog] = useState(false)
  const [imagee, setImagee] = useState(catalogueImages[0])

  const focusedImage = (e) => {
    let currentImage = e.target.src;
    setImagee(currentImage);
    console.log(currentImage)
  }


  return (
    <main className="main">
      {
        catalog &&
        <div className="catalogue-wrap">
          <div className='catalogue-modal'>
          </div>
          <Catalogue images={catalogueImages} activeImage={imagee} onClick={focusedImage} closeIcon={() => setCatalog(false)}/>
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
            <p className="desc-title">Description</p>
            <p className="desc-content">
              Hotsoup is one super amazing restaurant that selects the finest of
              products to carefully produce awesome snacks, soups, local,
              continental and intercontinental dishes which promised to bring
              you back for more. We’d rather you experience this for yourself.
            </p>
          </div>

          <div className="photos">
            <div className="photos-wrap">
              <p>Business Photos</p>
              <div className="business-photos">
                <Image src="/frame1.svg" alt="food" height="112" width="152" />
                <Image src="/frame2.svg" alt="food" height="112" width="152" />
                <Image src="/frame3.svg" alt="food" height="112" width="152" />
                <Image src="/frame4.svg" alt="food" height="112" width="152" />
                <Image src="/frame5.svg" alt="food" height="112" width="152" />
              </div>
            </div>
            <hr className="line" />

            <div className="photos-wrap">
              <p>Catalogue</p>

              <div className="user-side-catalogue">
                <Image
                  src="/stacked-card.svg"
                  alt="food"
                  height="178"
                  width="178"
                  onClick={() => setCatalog(true)}
                />
                <Image
                  src="/stacked-card-1.svg"
                  alt="food"
                  height="178"
                  width="178"
                />
                <Image
                  src="/stacked-card-2.svg"
                  alt="food"
                  height="178"
                  width="178"
                />
                <Image
                  src="/stacked-card-3.svg"
                  alt="food"
                  height="178"
                  width="178"
                />
              </div>
            </div>
          </div>
          <hr className="line" />
          <div className="comments-wrap">
            <div className="review">
              <p className="review-p">Reviews</p>
              <div>
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
            <p className="location">Location</p>

            <Image src={"/map.svg"} width={"328"} height={"317"} alt="map" />

            <p className="hour">Hour</p>

            {openingHours?.map((session, index) => {
              return (
                <div className="opening-time" key={index}>
                  <div className="location">{session.day}</div>
                  <div className="time-range">{session.time_range}</div>
                  <div className="open">{session.open}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default BusinessProfile;
