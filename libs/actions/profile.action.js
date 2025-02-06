"use server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getUserProfile(token) {
  if (!token) {
    throw new Error("Authentication token is required");
  }

  const getUserUrl = `${BASE_URL}/user/profile/fetch`;
  console.log("Fetching profile from:", getUserUrl); // Debug log

  try {
    const response = await fetch(getUserUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      // Add cache: 'no-store' to prevent caching issues
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Profile fetch failed:", {
        status: response.status,
        statusText: response.statusText,
      });
      throw new Error(`Failed to fetch profile: ${response.status}`);
    }

    const result = await response.json();
    return result.d;
  } catch (error) {
    console.error("Profile fetch error details:", error);
    throw new Error("Failed to fetch user profile. Please try again later.");
  }
}

export async function updateUserProfile(token, userData) {
  const getUpdateUrl = `${BASE_URL}/user/update_profile`;

  if (!token) {
    throw new Error("Unauthorized");
  }

  try {
    const response = await fetch(getUpdateUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      console.error("Update profile failed:", {
        url: getUpdateUrl,
        status: response.status,
        statusText: response.statusText,
      });
      const errorBody = await response.text();
      console.error("Error response:", errorBody);
      throw new Error(
        `HTTP error: ${response.status} - ${response.statusText}`
      );
    }
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
