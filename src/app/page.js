"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const totalImages = 16; // total number of images
  const batchSize = 4;   // the number of pictures to show at once

  const [startIndex, setStartIndex] = useState(0); // 

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + batchSize) % totalImages); // 
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  
  const imagesToShow = Array.from({ length: batchSize }, (_, i) => {
    return ((startIndex + i) % totalImages) + 1; // 
  });

  return (
    <div className="flex flex-col p-4 items-center justify-center min-h-[calc(100vh-80px)]">
      <h1 className="text-4xl md:text-5xl font-bold text-center mt-8">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-slideFadeIn inline-block">
          LLD Sports
        </span>{" "}
        Training & Baseline Testing
      </h1>

      <p className="mt-4 text-center max-w-2xl text-lg animate-slideFadeIn">
        LLD Sports Soccer Training provides girls and boys of all ages with
        individually tailored soccer training, skills, drills, technique, and
        tactics.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full max-w-6xl">
        {imagesToShow.map((i, idx) => (
          <div
            key={i}
            className="w-full h-64 relative rounded-lg overflow-hidden group animate-slideFadeIn"
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            <Image
              src={`/Test-${i}.png`}
              alt={`LLD Sports Soccer Training ${i}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 animate-slideFadeIn">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
