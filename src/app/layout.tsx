import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: {
    default: "Bilel Abassi - Pisciniste Expert en Tunisie | Depuis 20 Ans",
    template: "%s | Bilel Abassi Pisciniste",
  },

  description:
    "Pisciniste expert en Tunisie depuis 20 ans. Construction, rénovation et équipement de piscines haut de gamme. Devis gratuit et accompagnement personnalisé.",
  keywords: [
    "pisciniste Tunisie",
    "construction piscine Tunisie",
    "Bilel Abassi pisciniste",
    "rénovation piscine",
    "équipements piscine professionnels",
    "piscine haut de gamme Tunisie",
    "entretien piscine",
    "piscine familiale Tunisie",
    "expert piscine Tunisie",
    "piscine sur mesure"
  ],
  authors: [{ 
    name: "Bilel Abassi", 
    url: "https://bilelabassi.com" 
  }],
  creator: "Bilel Abassi",
  publisher: "Bilel Abassi Pisciniste",
  generator: "Next.js",
  applicationName: "Bilel Abassi Pisciniste",
  category: "Construction de piscines",
  openGraph: {
    title: "Bilel Abassi - Pisciniste Expert en Tunisie | Depuis 20 Ans",
    description: "Pisciniste expert en Tunisie depuis 20 ans. Construction, rénovation et équipement de piscines haut de gamme.",
    url: "https://bilelabassi.com",
    siteName: "Bilel Abassi Pisciniste",
    images: [
      {
        url: "https://www.bilelabassi.com/_next/image?url=%2Flogo.png&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Bilel Abassi - Pisciniste Expert en Tunisie",
      },
    ],
    locale: "fr_TN",
    type: "website",
    emails: ["fildairfreres@gmail.com"],
    phoneNumbers: ["+216 71 865 319"],
    countryName: "Tunisia",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bilelabassi",
    creator: "@bilelabassi",
    title: "Bilel Abassi - Pisciniste Expert en Tunisie",
    description: "Expert en construction et rénovation de piscines en Tunisie depuis 20 ans.",
    images: ["https://www.bilelabassi.com/_next/image?url=%2Flogo.png&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    languages: {
      "fr-TN": "/",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#274e9d",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "HomeAndConstructionBusiness"],
    "name": "Bilel Abassi - Pisciniste Expert en Tunisie",
    "legalName": "Bilel Abassi Pisciniste",
    "image": "https://www.bilelabassi.com/_next/image?url=%2Flogo.png&w=1200&q=80",
    "description": "Expert en construction, rénovation et équipement de piscines en Tunisie depuis 20 ans.",
    "brand": {
      "@type": "Brand",
      "name": "Bilel Abassi Pisciniste",
      "logo": "https://www.bilelabassi.com/_next/image?url=%2Flogo.png&w=256&q=80"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "km 13 av Fatouma Bourguiba",
      "addressLocality": "La Soukra",
      "postalCode": "2036",
      "addressCountry": "Tunisia",
      "addressRegion": "Ariana"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.8969",
      "longitude": "10.1903"
    },
    "telephone": "+216 71 865 319",
    "email": "fildairfreres@gmail.com",
    "url": "https://bilelabassi.com",
    "priceRange": "$$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=100007108443086",
      "https://www.instagram.com/fildair_bilel_abassi/",
      "https://www.tiktok.com/@fildairbilelabass"
    ],
    "founder": {
      "@type": "Person",
      "name": "Bilel Abassi"
    },
    "foundingDate": "2003",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "10"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "36.8969",
        "longitude": "10.1903"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de Piscine",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Construction",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Piscine sur mesure"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Rénovation",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Rénovation complète"
              }
            }
          ]
        }
      ]
    }
  };

  return (
    <html lang="fr-TN">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#274e9d" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Bilel Abassi Pisciniste" />
        <meta name="application-name" content="Bilel Abassi Pisciniste" />
        <meta name="msapplication-TileColor" content="#274e9d" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        <link rel="canonical" href="https://bilelabassi.com" />
        <link rel="alternate" hrefLang="fr-TN" href="https://bilelabassi.com" />
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}