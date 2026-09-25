import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "가장 단순한 Next.js 프로젝트",
  description: "Next.js + TypeScript + Tailwind CSS 심플 스타터",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body className="antialiased bg-sky-50 text-slate-900">{children}</body>
    </html>
  );
}

