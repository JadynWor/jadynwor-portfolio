import { Outlet, Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react";
import "./tailwind.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jadyn Worthington" />
        <meta property="og:image" content="https://jadynwor.com/jadynwor_avatar.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@mekhijpg" />
        <meta name="twitter:image" content="https://jadynwor.com/jadynwor_avatar.png" />
        <link rel="icon" href="/favicon.ico" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}
