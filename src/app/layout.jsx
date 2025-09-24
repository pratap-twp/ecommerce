import "../styles/globals.css"
import NavBar from "./_components/NavBar"
import Footer from "./_components/Footer"
import { Providers } from "./react-redux/Providers"   

export const metadata = {
  title: "Store Demo",
  description: "Minimal e-commerce demo built with Next.js App Router",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          <main className="p-5">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
