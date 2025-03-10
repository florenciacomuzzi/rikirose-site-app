import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import React from "react";
import {Coverphoto} from "./components/coverphoto";
import Image from "next/image";
// import {Params} from "next/dist/server/request/params";
import coverPhoto from './public/coverphoto.png'


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Riki Rose',
    template: '%s | Riki Rose',
  },
  description: 'Explore the world of Riki Rose.',
  openGraph: {
    title: 'Riki Rose',
    description: 'Explore the world of Riki Rose.',
    url: baseUrl,
    siteName: 'Riki Rose',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // params: Params;
  params: { lang?: string }; // Define params explicitly;
}) {
  const { lang } = await params;
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      {/*<body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">*/}
      {/*<body className="h-screen w-full flex flex-col items-center">*/}
      <body className="h-screen w-full flex justify-center">
        {/* Wrapper to center content */}
        <div className="w-full max-w-7xl flex flex-col">
        {/*<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">*/}
        <main className="w-full max-w-7xl flex flex-col px-4 md:px-8">
          <Coverphoto />
        {/*<Image src={coverPhoto} alt={"fdg"} className={"mx-auto w-full max-w-4xl"}  />*/}
        <Image src={coverPhoto} alt={"fdg"} className={"mx-auto w-full"}  />
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
        </div>
      </body>
    </html>
  )
}
