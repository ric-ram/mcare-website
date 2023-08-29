// import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/navbar";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MCare",
  description: "",
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
          {children}
        </Providers>
      </body>
    </html>
  );
}
