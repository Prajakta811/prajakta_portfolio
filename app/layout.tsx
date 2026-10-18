import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Prajakta | Full Stack Developer",
    template: "%s | Prajakta",
  },
  description:
    "Full stack developer building fintech interfaces, customer platforms, and backend integrations with React, Next.js, Node.js, and PostgreSQL.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}