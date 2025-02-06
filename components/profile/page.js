"use client";

import { useState } from "react";
import {
  updateUserProfile,
  updateUserProfileImage,
} from "@/lib/actions/profile.action";
import useUser from "@/hooks/use-auth";
import Button from "../button/page";
import "./profile.css";
import Image from "next/image";

const Profile = () => {
  const { accessToken, user, setUser } = useUser();
  console.log(user);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formData, setFormData] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    alias: user?.alias || "",
    gender: user?.gender || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProfile = await updateUserProfile(accessToken, formData);
      setUser(updatedProfile);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageUpload = async (file) => {
    try {
      const updatedProfile = await updateUserProfileImage(accessToken, file);
      setUser(updatedProfile);
      // Clear the selected image and preview after successful upload
      setSelectedImage(null);
      setPreviewUrl(null);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleImageClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setSelectedImage(file);
        setPreviewUrl(URL.createObjectURL(file));
        handleImageUpload(file);
      }
    };
    input.click();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Image section same as before */}

        <div className="user_photo_section">
          <Image
            src={previewUrl || user?.profile_image || "/profileImage.svg"}
            alt="photo"
            width={"80"}
            height={"80"}
          />
          <Button
            value={"Upload New Picture"}
            type={"submit"}
            onClick={handleImageClick}
            className={"change_pic_btn"}
          />
          <Button
            value={"Delete"}
            type={"submit"}
            className={"delete_pic_btn"}
          />
        </div>

        <div>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First Name"
          />
          <br />
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <br />
          <input
            type="text"
            name="alias"
            value={formData.alias}
            onChange={handleChange}
            placeholder="Nickname"
          />
        </div>

        <div className="radio_options">
          <p className="gender">Gender</p>
          <input
            type="radio"
            name="gender"
            value="M"
            checked={formData.gender === "M"}
            onChange={handleChange}
          />
          <label>Male</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="F"
            checked={formData.gender === "F"}
            onChange={handleChange}
          />
          <label>Female</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="N"
            checked={formData.gender === "N"}
            onChange={handleChange}
          />
          <label>Prefer not to say</label>
        </div>

        <div className="btns_flex">
          <Button type="submit" value="Save Changes" className="save_btn" />
          <Button type="button" value="Cancel" className="cancel_btn" />
        </div>
      </form>
    </div>
  );
};

export default Profile;
