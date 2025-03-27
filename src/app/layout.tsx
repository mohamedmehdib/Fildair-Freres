import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: {
    default: "Bilel Abassi - Pisciniste De Père en Fils",
    template: "%s | Bilel Abassi",
  },
  description:
    "Bilel Abassi vous propose des services complets pour vos projets de piscines : construction sur mesure, rénovation, entretien annuel, vente en gros de matériel.",
  keywords: [
    "piscines Tunisie",
    "équipements piscines",
    "Bilel Abassi",
    "piscines hors sol",
    "piscines en Tunisie",
    "Construction piscine tunisie", 
    "Equipenents piscine tunisie",
    "Tunisie piscine ",
    "Pisciniste tunisie"
  ],
  authors: [{ name: "Bilel Abassi - Pisciniste De Père en Fils", url: "https://bilelabassi.com" }],
  openGraph: {
    title: "Bilel Abassi - Pisciniste De Père en Fils",
    description:
      "Bilel Abassi vous propose des services complets pour vos projets de piscines : construction sur mesure, rénovation, entretien annuel, vente en gros de matériel.",
    url: "https://bilelabassi.com",
    siteName: "Bilel Abassi - Pisciniste De Père en Fils",
    images: [
      {
        url: "https://www.bilelabassi.com/_next/image?url=%2Flogo.png&w=640&q=75",
        width: 1200,
        height: 630,
        alt: "Bilel Abassi - Pisciniste De Père en Fils",
      },
    ],
    locale: "fr_TN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilel Abassi - Pisciniste De Père en Fils",
    description:
      "Bilel Abassi vous propose des services complets pour vos projets de piscines : construction sur mesure, rénovation, entretien annuel, vente en gros de matériel.",
    images: ["https://www.bilelabassi.com/_next/image?url=%2Flogo.png&w=640&q=75"],
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
  metadataBase: new URL("https://bilelabassi.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bilel Abassi - Pisciniste De Père en Fils",
    image: "https://www.bilelabassi.com/_next/image?url=%2Flogo.png&w=640&q=75",
    description:
      "Bilel Abassi vous propose des services complets pour vos projets de piscines : construction sur mesure, rénovation, entretien annuel, vente en gros de matériel.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "km 13 av Fatouma Bourguiba",
      addressLocality: "La Soukra",
      postalCode: "2036",
      addressCountry: "Tunisia",
    },
    telephone: "+216 71 865 319",
    email: "fildairfreres@gmail.com",
    url: "https://bilelabassi.com",
    sameAs: [
      "https://www.facebook.com/profile.php?id=100007108443086&ref=ig_profile_ac",
      "https://www.instagram.com/fildair_bilel_abassi/",
      "https://www.tiktok.com/@fildairbilelabass",
    ],
  };

  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#274e9d" />

        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Bilel Abassi" />
        <meta name="application-name" content="Bilel Abassi" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}