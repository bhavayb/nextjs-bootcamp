import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">

      {/* Title */}
      <h1 className="text-3xl mb-8 font-semibold">
        Choose Your Destination
      </h1>

      {/* Buttons container */}
      <div className="flex flex-col gap-6 w-64">

        <Link
          href="/destinations/paris"
          className="bg-white text-black py-4 rounded-xl text-center text-xl font-medium hover:bg-gray-200 transition"
        >
          Paris
        </Link>

        <Link
          href="/destinations/tokyo"
          className="bg-white text-black py-4 rounded-xl text-center text-xl font-medium hover:bg-gray-300 transition"
        >
          Tokyo
        </Link>

        <Link
          href="/destinations/newyork"
          className="bg-white text-black py-4 rounded-xl text-center text-xl font-medium hover:bg-gray-200 transition"
        >
          New York
        </Link>

      </div>
    </div>
  )
}

export default page
