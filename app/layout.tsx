"use client";

// import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Box, Container } from "@chakra-ui/react";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MCare",
  description: "",
  authors: { name: "Ricardo Ramos", url: "https://ricardoframos.com" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Providers>
          <Navbar />

          <Container
            pt={"85px"}
            maxWidth={"full"}
            // maxHeight={'full'}
            px={{ md: "160px", base: "32px" }}
          >
            {children}
          </Container>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
