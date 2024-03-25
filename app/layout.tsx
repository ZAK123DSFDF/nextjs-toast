import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "this is layout app",
  description: "this is layout app description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>this is shared component</div>
        <Toaster expand richColors position="top-right" />
        {children}
      </body>
    </html>
  );
}
