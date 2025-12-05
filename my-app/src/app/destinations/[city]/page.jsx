import React from 'react'

async function page({ params }) {
    const { city } = await params;
  return (
    <>
        <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
          <h1 className="text-3xl mb-8 font-semibold">
            Welcome to {city}, Discover amazing sights and culture!
          </h1>
          
        </div>
    </>
  )
}

export default page
