"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image'

export default function Navbar() {
  const pathname = usePathname(); // current URL path

  return (
    <div className="w-full bg-white shadow-sm py-4 px-6 text-xl font-semibold text-gray-800 flex items-center justify-between">
      
      {/* Left side */}
      <div className="flex items-center gap-2">
        <Image src="/earthjpg.jpg" alt="Logo" width={40} height={40} />
        Travel Guide
      </div>

      {/* Right side */}
      <div className="flex gap-8">

        <Link
          href="/"
          className={`${pathname === "/" ? "text-blue-600" : "hover:text-black-600"}`}
        >
          Home
        </Link>

        <Link
          href="/destinations"
          className={`${pathname === "/destinations" ? "text-blue-600" : "hover:text-black-600"}`}
        >
          Destinations
        </Link>

        <Link
          href="/contactus"
          className={`${pathname === "/contactus" ? "text-blue-600" : "hover:text-black-600"}`}
        >
          Contact Us
        </Link>

      </div>
    </div>
  );
}
