import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "７大特典プレゼント！",
  description:
    "お受け取りいただいた特典ワークへ、迷わずアクセスできる入口ページです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
