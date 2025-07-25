import React from "react";
import { Outlet, Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react";
import "./tailwind.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <html lang="en" className="h-full bg-white">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <Meta />
        <Links />
        <title>Jadyn Worthington Portfolio</title>
      </head>
      <body className="h-full">
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
