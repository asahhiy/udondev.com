import type { Metadata } from "next";
import "./globals.css";
import HeaderComponents from "@/components/HeaderComponents";
import { JotaiProviders } from "@/lib/provider";

export const metadata: Metadata = {
  title: "udondev.com",
  description: "web developer portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JotaiProviders>
          <HeaderComponents />
          {children}
        </JotaiProviders>
      </body>
    </html>
  );
}
