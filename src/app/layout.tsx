import { CustomCursor } from "@/components/CustomCursor/CustomCursor";
import { Providers } from "@/components/ui/Provider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import LocalFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "프론트엔드 개발자 이민경 포트폴리오",
  description: "프론트엔드 개발자 이민경 포트폴리오",
};

const pretendard = LocalFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard",
});

const AggravoLight = LocalFont({
  src: "../fonts/Aggravo-L.woff",
  display: "swap",
  variable: "--font-aggravo-l",
});

const AggravoMedium = LocalFont({
  src: "../fonts/Aggravo-M.woff",
  display: "swap",
  variable: "--font-aggravo-m",
});

const AggravoBold = LocalFont({
  src: "../fonts/Aggravo-B.woff",
  display: "swap",
  variable: "--font-aggravo-b",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.variable} ${AggravoLight.variable} ${AggravoMedium.variable} ${AggravoBold.variable} font-sans`}
      >
        <Providers>
          {children}
          <CustomCursor />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
