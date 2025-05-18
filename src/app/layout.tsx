import './globals.css';
import { Navbar } from '@/components/Navbar';

export const metadata = {
  title: 'Travail',
  description: 'Quiz platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 dark:bg-black dark:text-white transition-colors">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
