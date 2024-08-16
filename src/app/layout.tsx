"use client"
import { Inter } from "next/font/google";
import Script from "next/script";
import { useEffect } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdfaWQiOiI5NjE0IiwiY2hhdGJvdF9pZCI6IjY2YmYyNDllYWZlNTFiZGQ2MmFiZDc2OCIsInVzZXJfaWQiOiJwYXJha2gifQ.zBHGY-m6jlgtJ5qokxVFXOch63qmvID6a0E0CDFRmfc";

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("embedToken", token);
    script.setAttribute("hideIcon", "true");
    script.id = "chatbot-main-script";
    // script.src = scriptSrc;
    document.head.appendChild(script);
    script.src = "https://chatbot-embed.viasocket.com/chatbot-prod.js"

  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <Script id="chatbot-main-script" src="https://chatbot-embed.viasocket.com/chatbot-prod.js" embedToken={token} /> */}
    </html>
  );
}
