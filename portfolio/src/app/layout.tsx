'use client';
import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';

const outfit = Outfit({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.className} bg-gradient-to-r from-green-400 to-blue-400`}
      >
        <ThemeProvider>
          <div className="grid grid-cols-12 gap-6 my-14 lg:px-48 px-5 sm:px-20 md:px-32">
            <div className="lg:col-span-3 bg-white dark:bg-black rounded-2xl col-span-12 p-4 text-center">
              <Sidebar />
            </div>
            <div className="lg:col-span-9 bg-white rounded-2xl col-span-12 flex flex-col overflow-hidden">
              <Navbar />
              <AnimatePresence mode="wait">{children}</AnimatePresence>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
