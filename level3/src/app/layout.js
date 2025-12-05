import "./globals.css";
import { Lobster } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lobster.className}>
        {children}
      </body>
    </html>
  );
}
