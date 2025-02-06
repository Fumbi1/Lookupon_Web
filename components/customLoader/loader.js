import React from 'react';

const LoadingPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-50">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        
        {/* Loading Text */}
        <div className="mt-4 text-lg text-gray-600 font-medium flex items-center">
          Loading
          <span className="ml-1 inline-flex">
            <span className="animate-bounce delay-0 mx-0.5">.</span>
            <span className="animate-bounce delay-150 mx-0.5">.</span>
            <span className="animate-bounce delay-300 mx-0.5">.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;