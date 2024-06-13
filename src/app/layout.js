import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Globant Tower",
  description: "Escala la torre Globant",
  authors: [{ name: "Nico Battaglia" }],
  keywords: ["Next.js", "React", "JavaScript", "Three.js"],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
