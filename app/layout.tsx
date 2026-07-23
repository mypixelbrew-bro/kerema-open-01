import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Toaster from "@/components/Toaster";

export const metadata: Metadata = {
  title: "Thomas Opa — A stronger Kerema, built at home | Kerema 2027",
  description:
    "The campaign to elect Thomas Opa, Kerema Open, Gulf Province. A plan you can hold him to — roads, health, education, and open books.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <div className="wrap">
          {children}
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
