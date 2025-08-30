import type { Metadata } from "next";
import { Space_Grotesk, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap'
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Chloe Nibali — Software Developer",
  description: "Security-focused full-stack developer",
  openGraph: {
    title: 'Chloe Nibali — Software Developer',
    description: 'Production-minded developer: Security focus, and accessible interfaces.',
    url: 'https://codebychloe.com',
    siteName: 'Chloe Nibali Portfolio',
    images: [
      {
        url: 'https://codebychloe.com/socialShare.png', 
        width: 1200,
        height: 630,
        alt: 'Chloe Nibali - Software Developer Portfolio',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chloe Nibali - Software Developer',
    description: 'Production-minded developer: Security focus, and accessible interfaces.',
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
      <body className={`${spaceGrotesk.variable} ${poppins.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}