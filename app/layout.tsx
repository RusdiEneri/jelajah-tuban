import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jelajah Tuban | Where History Meets the Sea",
  description: "Discover the beaches, caves, heritage, and stories of Tuban.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
