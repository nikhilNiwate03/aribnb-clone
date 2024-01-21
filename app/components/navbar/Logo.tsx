"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { SiAirbnb } from "react-icons/si";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="cursor-pointer flex items-center gap-1 text-rose-500 font-bold text-xl"
    >
      <SiAirbnb className="hidden md:block cursor-pointer" size={30} />
      airbnb
    </div>
  );
};

export default Logo;
