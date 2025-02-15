import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";

export const metadata: Metadata = {
  title: {
    default: "Fildair Frères - Piscines et Équipements en Tunisie",
    template: "%s | Fildair Frères", // Dynamic title for child pages
  },
  description:
    "Découvrez Fildair Frères, votre partenaire de confiance pour les piscines et équipements en Tunisie. Nous offrons des solutions de qualité pour vos projets de piscines.",
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
      "Découvrez Fildair Frères, votre partenaire de confiance pour les piscines et équipements en Tunisie.",
    url: "https://piscinesfildairfrerestunisie.com",
    siteName: "Fildair Frères",
    images: [
      {
        url: "https://piscinesfildairfrerestunisie.com/og-image.jpg",
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
      "Découvrez Fildair Frères, votre partenaire de confiance pour les piscines et équipements en Tunisie.",
    images: ["https://piscinesfildairfrerestunisie.com/og-image.jpg"],
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
  metadataBase: new URL("https://piscinesfildairfrerestunisie.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
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
      "Découvrez Fildair Frères, votre partenaire de confiance pour les piscines et équipements en Tunisie.",
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
  };

  return (
    <html lang="fr">
      <head>
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