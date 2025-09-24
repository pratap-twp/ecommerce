"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function NotFound() {
  const pathname = usePathname()
  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h1>404 - Page not found</h1>
      <p>The page <code>{pathname}</code> does not exist.</p>
      <Link href="/"><button>Go Home</button></Link>
    </div>
  )
}
