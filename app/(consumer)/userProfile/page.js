"use client";

import Image from "next/image";
import Button from "@/components/button/page";
import { reviewSection } from "@/app/utils/arrays";
import Link from "next/link";
import "./userProfile.css";
import useUser from "@/hooks/use-auth";
import { getUserProfile } from "@/lib/actions/profile.action";
import { useCallback, useEffect, useState } from "react";

const UserProfile = () => {
  const { accessToken, setUser, user } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProfile = useCallback(async () => {
    if (!accessToken) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const profile = await getUserProfile(accessToken);
      console.log("Profile loaded:", profile); // Debug log
      setUser(profile);
    } catch (err) {
      console.error("Profile load error:", err); // Debug log
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [accessToken, setUser]);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  const name =
    user?.first_name && user?.last_name
      ? `${user?.first_name} ${user?.last_name}`.trim()
      : "User";

  // Handle loading state
  if (isLoading) {
    return (
      <div className="user_flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="user_flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <Button value="Retry" className="edit_btn" onClick={loadProfile} />
        </div>
      </div>
    );
  }

  // Handle no user state
  if (!user) {
    return (
      <div className="user_flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="mb-4">Please sign in to view your profile</p>
          <Link href="/login">
            <Button value="Sign In" className="edit_btn" />
          </Link>
        </div>
      </div>
    );
  }

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
                    <Link href={"/editReview"}>
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
