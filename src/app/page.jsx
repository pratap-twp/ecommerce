import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Welcome to Store Demo</h1>
      <p><Link href="/products" className="cursor-pointer">Browse products</Link></p>
    </div>
  )
}

