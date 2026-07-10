import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Abdhul Kareem L — Full Stack Developer & Cloud Engineer',
  description:
    'Personal portfolio of Abdhul Kareem L — MERN Stack Developer transitioning into Cloud Engineering with AWS. Open to opportunities.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'AWS', 'Cloud Engineer', 'React', 'Node.js'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
