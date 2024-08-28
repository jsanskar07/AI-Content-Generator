import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Generator",
  description: "App to generate data to your requirement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            {children}
            <Toaster/>
          </body>
        </html>
    </ClerkProvider>
  );
}
