import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Hot Room · Bikram Yoga en Monterrey",
    template: "%s · The Hot Room",
  },
  description:
    "Bikram Yoga tradicional en una sala a 42°C. Plaza Chroma, San Pedro Garza García. Una práctica. Una comunidad. Un templo.",
  keywords: [
    "bikram yoga monterrey",
    "hot yoga san pedro",
    "yoga plaza chroma",
    "the hot room",
    "yoga 42 grados",
    "E84 yoga",
    "esak garcia",
  ],
  openGraph: {
    title: "The Hot Room · Bikram Yoga en Monterrey",
    description:
      "Bikram Yoga tradicional en una sala a 42°C. Plaza Chroma, San Pedro Garza García.",
    locale: "es_MX",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "The Hot Room",
  description:
    "Estudio de Bikram Yoga tradicional en San Pedro Garza García, Monterrey.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plaza Chroma, Av. Ricardo Margain 315",
    addressLocality: "San Pedro Garza García",
    addressRegion: "Nuevo León",
    postalCode: "66267",
    addressCountry: "MX",
  },
  telephone: "+52-81-3276-0394",
  url: "https://thehotroom.yoga/",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.98",
    reviewCount: "43",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
