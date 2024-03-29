import type { Metadata } from "next";

import { Oswald } from "next/font/google";
import "./globals.scss";
import { Header } from "./_components/header/Header";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Header />
        <div className="container pb-5">
          {children}
        </div>
      </body>
    </html>
  );
}
