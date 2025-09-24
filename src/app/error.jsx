"use client"
import { useEffect } from "react"

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Global error:", error)
  }, [error])

  return (
    <div className= "text-center  p-40" >
      <h1>Something went wrong</h1>
      <p>{error?.message}</p>
      <button onClick={() => reset()} className="cursor-pointer">Try again</button>
    </div>
  )
}
