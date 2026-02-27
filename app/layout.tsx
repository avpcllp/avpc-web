import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'A V P C & CO LLP | Chartered Accountants',
  description:
    'A V P C & CO LLP provides assurance, taxation, forensics and RERA advisory services from Kolhapur and Pune.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
