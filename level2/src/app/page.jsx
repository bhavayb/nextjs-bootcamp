'use client'
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  // await new Promise((resolve)=> setTimeout(resolve, 2000))
  const [name, setName] = useState("Ayush")
  return (
    <>
    home 2
    {name}
    </>
  );
}
