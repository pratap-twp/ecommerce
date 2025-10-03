import "../styles/globals.css"
import NavBar from "./_components/NavBar"
import Footer from "./_components/Footer"
import { Providers } from "./react-redux/Providers"   
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Providers>
      </body>
    </html>
  )
}
