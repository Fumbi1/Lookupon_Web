"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "./verificationPage.css";

export default function VerificationPage() {
  const [verificationResult, setVerificationResult] = useState(null);
  const [showResendButton, setShowResendButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resendMessage, setResendMessage] = useState("");
  const urlParams = useSearchParams();

  const route = useRouter();

  const ext = urlParams.get("ext");
  const token = urlParams.get("token");

  const handleVerification = async () => {
    if (!ext || !token) {
      setVerificationResult({
        success: false,
        message: "Invalid verification link. Please try again.",
      });
      setShowResendButton(true);
      return;
    }

    setIsLoading(true);
    try {
      const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
      const verificationEndpoint = `${BASE_URL}/auth/verify?token=${encodeURIComponent(
        token
      )}`;
      const response = await fetch(verificationEndpoint, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();
      setVerificationResult(result);

      if (!result.success) {
        setShowResendButton(true);
      } else {
        setTimeout(() => {
          route.replace("/signIn");
        }, 5000);
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      setVerificationResult({
        success: false,
        message:
          "An error occurred during verification. Please try again later.",
      });
      setShowResendButton(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendVerification = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setResendMessage("");
    try {
      const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
      const reverificationEndpoint = `${BASE_URL}/auth/verify/resend?ext=${encodeURIComponent(
        ext
      )}`;
      const response = await fetch(reverificationEndpoint, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();
      setResendMessage("Verification email sent successfully.");
    } catch (error) {
      console.error("Resend Email Error:", error);
      setResendMessage(
        "Failed to resend verification email. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="verification-page">
      <div className="verifyEmail_content">
        <h1>Email Verification</h1>
        {/* <img src={email} alt="Email illustration" /> */}

        {verificationResult ? (
          <div className="verifyEmail_message">
            {verificationResult.success ? (
              <>
                <p>Email verified successfully!</p>
                <p>{verificationResult.message}</p>
              </>
            ) : (
              <>
                <p>Oops! Email verification failed.</p>
                <p>{verificationResult.message}</p>
                {showResendButton && (
                  <button
                    onClick={handleResendVerification}
                    disabled={isLoading}
                  >
                    {isLoading ? "Resending..." : "Resend Verification Email"}
                  </button>
                )}
              </>
            )}
          </div>
        ) : (
          <div className="verifyEmail_content">
            <p>
              Please verify your email to proceed to login and enjoy the amazing
              features we offer.
            </p>
            <button onClick={handleVerification} disabled={isLoading}>
              {isLoading ? "Verifying..." : "Verify Email"}
            </button>
          </div>
        )}
        {resendMessage && <p className="resendMessage">{resendMessage}</p>}
      </div>
    </div>
  );
}
