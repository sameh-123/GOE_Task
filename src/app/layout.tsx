import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';


const montserrat = Montserrat({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gates of Egypt',
  description: 'Gates of Egypt , book your next destination',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
