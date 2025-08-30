"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfilePhotoProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}

export default function ProfilePhoto({ src, alt, size = "lg" }: ProfilePhotoProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32", 
    lg: "w-48 h-48"
  };

  return (
    <div className={`relative ${sizeClasses[size]} mx-auto mb-8`}>
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 animate-pulse">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-lg opacity-50"></div>
      </div>
      
      {/* Inner container */}
      <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-900 border-4 border-gray-800 hover-glow transition-all duration-300">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Loading placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 -right-4 w-2 h-2 bg-purple-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
}
