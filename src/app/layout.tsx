
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Seikh Akhinoor Jyoti | Intellectual & Artistic Portfolio',
  description: 'A comprehensive archive of academic excellence, cognitive strategy, and aesthetic performance by Seikh Akhinoor Jyoti, University of Dhaka.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
