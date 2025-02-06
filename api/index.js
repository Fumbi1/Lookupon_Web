import axios from "axios";
import useUser from "@/hooks/use-auth";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  async (config) => {
    const { accessToken } = useUser.getState();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    originalRequest._retry = true;

    // Handle authentication errors (401)
    if (error.response?.status === 401) {
      // Clear user data and force logout
      const { clearUser } = useUser.getState();
      clearUser();

      // You might want to redirect to login page here
      // If you're using Next.js App Router:
      window.location.href = "/signIn";

      return Promise.reject(new Error("Session expired - please login again"));
    }

    // Handle permission errors (403)
    if (error.response?.status === 403) {
      const { clearUser } = useUser.getState();
      clearUser();

      window.location.href = "/signIn";
      return Promise.reject(new Error("Permission denied"));
    }

    // For other errors, reject normally
    return Promise.reject(error);
  }
);

export default apiClient;
