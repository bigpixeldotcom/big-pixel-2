import type { Metadata } from 'next';
import Script from 'next/script';
import localFont from 'next/font/local';
import { config } from '@fortawesome/fontawesome-svg-core';
import { ClerkProvider } from '@clerk/nextjs';
import HoveredLinkProvider from '@/lib/contexts/hovered-link';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';

import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';

config.autoAddCss = false;

const neueHaasGrotesk = localFont({
  src: [
    {
      path: './fonts/Neue-Haas-Grotesk-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Neue-Haas-Grotesk-400-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Neue-Haas-Grotesk-600.woff2',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './fonts/Neue-Haas-Grotesk-700.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: './fonts/Neue-Haas-Grotesk-900.woff2',
      weight: '900',
      style: 'black',
    },
  ],
});

const rockwellNova = localFont({
  src: [
    {
      path: './fonts/Rockwell-Nova-200.woff2',
      weight: '200',
      style: 'light',
    },
    {
      path: './fonts/Rockwell-Nova-400-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Rockwell-Nova-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Rockwell-Nova-700-Italic.woff2',
      weight: '700',
      style: 'bold-italic',
    },
    {
      path: './fonts/Rockwell-Nova-700.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: './fonts/Rockwell-Nova-800.woff2',
      weight: '800',
      style: 'black',
    },
  ],
});

const unibody = localFont({
  src: './fonts/Unibody8-900.woff2',
  weight: '900',
  style: 'black',
});

export const metadata: Metadata = {
  title: 'Big Pixel',
  description: 'A small, yet perfectly formed design agency.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' style={{ scrollBehavior: 'smooth' }}>
        <head>
          <Script
            src='https://cdn-cookieyes.com/client_data/211462d71c077e0dc631e691/script.js'
            strategy='beforeInteractive'
            id='cookieyes'
          />
          <link rel='icon' type='image/png' href='/favicon-96x96.png' sizes='96x96' />
          <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <meta name='apple-mobile-web-app-title' content='Big Pixel' />
          <link rel='manifest' href='/site.webmanifest' />
        </head>
        <body
          className={`${neueHaasGrotesk.className} ${rockwellNova.className} ${unibody.className} antialiased bg-black text-gray-100 w-full h-full font-sans`}
        >
          <HoveredLinkProvider>
          <div className='flex flex-col min-h-screen justify-between'>
            <Navbar />
            <main className='flex-grow'>
              {children}
            </main>
            <Footer />
          </div>
          </HoveredLinkProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
