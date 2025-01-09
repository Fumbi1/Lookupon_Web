"use client";

import Image from "next/image";
import Button from "@/components/button/page";
import { reviewSection } from "@/app/utils/arrays";
import Link from "next/link";
import "./userProfile.css";
import useUser from "@/hooks/use-auth";
import { getUserProfile } from "@/libs/actions/profile.action";
import { useCallback, useEffect } from "react";

const UserProfile = () => {
  const { accessToken, setUser, user } = useUser();

  const loadProfile = useCallback(async () => {
    if (!accessToken) return;
    const profile = await getUserProfile(accessToken);
    setUser(profile);
  }, [accessToken, setUser]);

  const name = user?.first_name + " " + user?.last_name; // Added space between names

  useEffect(() => {
    if (accessToken) {
      loadProfile();
    }
  }, [accessToken, loadProfile]);

  return (
    <div className="user_flex">
      <div className="user_info">
        <Image
          src="/profileImage.svg"
          alt="User Image"
          height="168"
          width="168"
        />
        <p className="username">{name}</p>
        <Button value={"Edit Profile"} className={"edit_btn"} />
      </div>
      <div className="user_reviews">
        <p className="title">Reviews</p>
        <div>
          {reviewSection.map((content, index) => {
            return (
              <div key={index}>
                <div className="user_id_wrap">
                  <div className="user_details">
                    <Image
                      src={content.image}
                      width={"40"}
                      height={"40"}
                      alt="User Image"
                    />
                    <div>
                      <p className="user_name">{content.name}</p>
                      <p className="comment_date">
                        New Market, Obafemi Awolowo University, Ile-Ife,
                      </p>
                    </div>
                  </div>

                  <div className="options">
                    <Link href={"/paths/editReview"}>
                      <Image
                        src={"/edit.svg"}
                        alt={"edit"}
                        width={"18"}
                        height={"18"}
                      />
                    </Link>
                    <Link href={""}>
                      <Image
                        src={"/delete.svg"}
                        alt={"del"}
                        width={"18"}
                        height={"18"}
                      />
                    </Link>
                  </div>
                </div>
                <div className="other_details">
                  <p>*****</p> {/*replace with stars*/}
                  <p className="comment_date">{content.date}</p>
                </div>
                <div className="review_comment">
                  <p>{content.review_comment}</p>
                  {/* <div className="image_flex">
                    {content.photo_evidence?.map((photo, i) => {
                      return (
                        <Image
                          key={i}
                          src={photo}
                          alt="proof"
                          width={"176"}
                          height={"123"}
                        />
                      );
                    })}
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
