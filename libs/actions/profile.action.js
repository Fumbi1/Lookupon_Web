"use server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getUserProfile(token) {
  const getUserUrl = `${BASE_URL}/user/profile/fetch`;

  if (!token) {
    throw new Error("Unauthorized");
  }

  try {
    const response = await fetch(getUserUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const result = await response.json();
    return result.d;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUserProfile(token, userData) {
  const getUpdateUrl = `${BASE_URL}/user/update_profile`;

  if (!token) {
    throw new Error("Unauthorized");
  }

  try {
    const response = await fetch(getUpdateUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const result = await response.json();
    return result.d;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateUserProfileImage(token, imageFile) {
  const getUpdateImageUrl = `${BASE_URL}/user/upload_image`;

  if (!token) {
    throw new Error("Unauthorized");
  }

  try {
    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await fetch(getUpdateImageUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const result = await response.json();
    return result.d;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
