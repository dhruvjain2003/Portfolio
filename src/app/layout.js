import "./globals.css";
import { Inter } from "next/font/google";
import {
  personSchema,
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from "../lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Dhruv Jain",
  },
  description: siteDescription,
  keywords: [
    "Dhruv Jain",
    "Full Stack Developer",
    "Software Engineer",
    "Node.js",
    "React",
    "Next.js",
    "GraphQL",
    "PostgreSQL",
    "Portfolio",
    "Web Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Dhruv Jain", url: siteUrl }],
  creator: "Dhruv Jain",
  publisher: "Dhruv Jain",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/me.png",
        width: 500,
        height: 500,
        alt: "Dhruv Jain — Full Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/me.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
