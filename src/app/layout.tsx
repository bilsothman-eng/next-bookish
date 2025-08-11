import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "bookish-scroll-story",
  description: "Lovable Generated Project",
  openGraph: {
    title: "bookish-scroll-story",
    description: "Lovable Generated Project",
    type: "website",
    images: [
      "https://lovable.dev/opengraph-image-p98pqg.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
