import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";

export const metadata: Metadata = {
  title: {
    default: "Fildair Frères - Piscines et Équipements en Tunisie",
    template: "%s | Fildair Frères", // Dynamic title for subpages
  },
  description:
    "Fildair Frères vous propose des services complets pour vos projets de piscines : conception sur mesure, rénovation, entretien annuel, vente en gros de matériel.",
  keywords: [
    "piscines Tunisie",
    "équipements piscines",
    "Fildair Frères",
    "piscines hors sol",
    "piscines en Tunisie",
  ],
  authors: [{ name: "Fildair Frères", url: "https://piscinesfildairfrerestunisie.com" }],
  openGraph: {
    title: "Fildair Frères - Piscines et Équipements en Tunisie",
    description:
      "Fildair Frères vous propose des services complets pour vos projets de piscines : conception sur mesure, rénovation, entretien annuel, vente en gros de matériel.",
    url: "https://piscinesfildairfrerestunisie.com",
    siteName: "Fildair Frères",
    images: [
      {
        url: "https://www.piscinesfildairfrerestunisie.com/_next/image?url=%2Flogo.png&w=640&q=75",
        width: 1200,
        height: 630,
        alt: "Fildair Frères - Piscines et Équipements",
      },
    ],
    locale: "fr_TN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fildair Frères - Piscines et Équipements en Tunisie",
    description:
      "Fildair Frères vous propose des services complets pour vos projets de piscines : conception sur mesure, rénovation, entretien annuel, vente en gros de matériel.",
    images: ["https://www.piscinesfildairfrerestunisie.com/_next/image?url=%2Flogo.png&w=640&q=75"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://piscinesfildairfrerestunisie.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fildair Frères",
    image: "https://www.piscinesfildairfrerestunisie.com/_next/image?url=%2Flogo.png&w=640&q=75",
    description:
      "Fildair Frères vous propose des services complets pour vos projets de piscines : conception sur mesure, rénovation, entretien annuel, vente en gros de matériel.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "km 13 av Fatouma Bourguiba",
      addressLocality: "La Soukra",
      postalCode: "2036",
      addressCountry: "Tunisia",
    },
    telephone: "+216 71 865 319",
    email: "fildairfreres@gmail.com",
    url: "https://piscinesfildairfrerestunisie.com",
    sameAs: [
      "https://www.facebook.com/profile.php?id=100007108443086&ref=ig_profile_ac",
      "https://www.instagram.com/fildair_bilel_abassi/",
      "https://www.tiktok.com/@fildairbilelabass",
    ],
  };

  return (
    <html lang="fr">
      <head>

  <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
  <link rel="icon" type="image/png" href="/favicon-96x96.png?v=2" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

  <link rel="manifest" href="/site.webmanifest" />

  <meta charSet="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="theme-color" content="#274e9d" />

  <meta name="apple-mobile-web-app-title" content="Fildair Frères" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />


        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}