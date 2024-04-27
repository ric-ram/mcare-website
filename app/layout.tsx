'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Container } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import { GlobalContextProvider } from './context/store';
import { Providers } from './providers';

const inter = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MCare',
  description: '',
  authors: { name: 'Ricardo Ramos', url: 'https://ricardoframos.com' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt'>
      <body className={inter.className} style={{ minHeight: '100vh' }}>
        <Providers>
          <GlobalContextProvider>
            <Navbar />
            <Container pt={'85px'} maxWidth={'100%'} px={0}>
              {children}
            </Container>
            <Footer />
          </GlobalContextProvider>
        </Providers>
      </body>
    </html>
  );
}
