import Link from "next/link"
import { Navigation } from "./components/Navigation"
export default function RootLayout({ children }) {
 
  return (
    <html>
      <head>
        <title>My first page with Next 13</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
