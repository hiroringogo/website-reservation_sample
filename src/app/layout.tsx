import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HANA Beauty & Nail | Costa Mesa, CA",
  description:
    "Hair salon & nail salon in Costa Mesa, Orange County. Cut, Color, Gel Nail, Head Spa. Book online with Square Appointments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
