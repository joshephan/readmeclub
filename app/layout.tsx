import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "리드미 독서 모임",
  description: "매드 프로그래머들의 진정성 있는 우아한 모임, 빌런들도 눈 착하게 뜨고 책 읽는 모임, 개발자들이 태반이지만 모두 다 환영하는 모임",
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/favicon_io/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/favicon_io/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    title: '리드미 독서 모임',
    description: '매드 프로그래머들의 진정성 있는 우아한 모임, 빌런들도 눈 착하게 뜨고 책 읽는 모임, 개발자들이 태반이지만 모두 다 환영하는 모임',
    url: 'https://readme.club',
    siteName: '리드미 독서 모임',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: '리드미 독서 모임',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '리드미 독서 모임',
    description: '매드 프로그래머들의 진정성 있는 우아한 모임, 빌런들도 눈 착하게 뜨고 책 읽는 모임, 개발자들이 태반이지만 모두 다 환영하는 모임',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
