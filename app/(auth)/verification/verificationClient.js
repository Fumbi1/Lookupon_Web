"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";


export default function VerificationClient() {
  const [verificationState, setVerificationState] = useState({
    result: null,
    isLoading: false,
    showResendButton: false,
    resendMessage: "",
  });
  
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [urlParams, setUrlParams] = useState({ ext: "", token: "" });
  
  useEffect(() => {
    setUrlParams({
      ext: searchParams?.get("ext") ?? "",
      token: searchParams?.get("token") ?? ""
    });
  }, [searchParams]);

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
  
  useEffect(() => {
    if (urlParams.token && urlParams.ext) {
      handleVerification();
    }
  }, [urlParams]);

  // ... (keep all the existing handler functions the same)
  // handleVerification, handleResendVerification, and updateVerificationState remain unchanged

  const { result, isLoading, showResendButton, resendMessage } = verificationState;

  return (
    <div className="flex flex-col w-full h-[480px] justify-center items-center font-['Outfit'] md:h-[490px] sm:h-[400px]">
      <div className="flex flex-col justify-center items-center mt-8 mb-8 w-full">
        <h1 className="font-medium text-5xl leading-[59px] text-center text-[#5F61A8] sm:text-4xl sm:font-normal">
          Email Verification
        </h1>

        {result ? (
          <div className="flex flex-col justify-center items-center mt-4 mb-8">
            {result.success ? (
              <div className="space-y-4">
                <p className="font-medium text-2xl leading-[29px] text-center text-[#5F61A8] sm:text-xl sm:font-normal">
                  Email verified successfully!
                </p>
                <p className="font-medium text-2xl leading-[29px] text-center text-[#5F61A8] sm:text-xl sm:font-normal">
                  {result.message}
                </p>
                <p className="text-sm mt-2 text-[#5F61A8]">
                  Redirecting to sign in page in 3 seconds...
                </p>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium text-2xl leading-[29px] text-center text-[#5F61A8] sm:text-xl sm:font-normal">
                  Oops! Email verification failed.
                </p>
                <p className="font-medium text-2xl leading-[29px] text-center text-[#5F61A8] sm:text-xl sm:font-normal">
                  {result.message}
                </p>
                {showResendButton && (
                  <button
                    onClick={handleResendVerification}
                    disabled={isLoading}
                    className="mt-4 px-6 py-[15px] bg-[#5F61A8] text-white text-lg font-normal cursor-pointer border-none disabled:opacity-50"
                  >
                    {isLoading ? "Resending..." : "Resend Verification Email"}
                  </button>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center mt-8">
            <p className="font-medium text-2xl leading-[29px] text-center text-black sm:text-xl sm:font-normal">
              Please verify your email to proceed to login and enjoy the amazing
              features we offer.
            </p>
            <button
              onClick={handleVerification}
              disabled={isLoading}
              className="mt-4 px-6 py-[15px] bg-[#5F61A8] text-white text-lg font-normal cursor-pointer border-none disabled:opacity-50"
            >
              {isLoading ? "Verifying..." : "Verify Email"}
            </button>
          </div>
        )}
        
        {resendMessage && (
          <p className="font-medium text-2xl leading-[29px] text-center text-[#5F61A8] mt-4 sm:text-xl sm:font-normal">
            {resendMessage}
          </p>
        )}
      </div>
    </div>
  );
}