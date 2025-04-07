import type { Metadata } from "next";
import { poppins } from "../public/fonts/fonts"
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Taskx",
  description: "Developed by TypingCode IT - Solutions Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.variable}
      >
        {children}
      </body>
    </html>
  );
}
