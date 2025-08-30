import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Website",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          {/* Sidebar on the left */}
          <Sidebar />
          {/* Main content area */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
