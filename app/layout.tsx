import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import ChatBot from "@/components/ChatBot";
import { Toaster } from "@/components/ui/toaster";
import FloatingChatButton from "@/components/floating-chat-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PrintPaani - Custom Water Bottles",
  description: "Custom branded water bottles for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* <ChatBot /> */}
        <FloatingChatButton />
        <Toaster />
      </body>
    </html>
  );
} 