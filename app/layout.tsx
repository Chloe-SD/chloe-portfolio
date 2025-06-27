import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next'; // for vercel analytics

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chloe Nibali - Developer",
  description: "Portfolio of Chloe Nibali",
  openGraph: {
    title: 'Chloe - Web & Mobile Developer',
    description: 'Portfolio of Chloe, web and mobile developer bringing innovative ideas to life.',
    url: 'https://codebychloe.com',
    siteName: 'Chloe\'s Portfolio',
    images: [
      {
        url: 'https://codebychloe.com/socialShare.png', 
        width: 1200,
        height: 630,
        alt: 'Chloe\'s Portfolio',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chloe - Full-Stack Developer',
    description: 'Portfolio of Chloe, Full-Stack Software Developer.',
    images: ['https://codebychloe.com/socialShare.png'],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/cmore1.jpg"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
