import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andre.Dev | Fiverr Portfolio",
  description:
    "Lovable websites, web apps, Supabase integrations, automation, bug fixes, and launch support by Andre.Dev.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
