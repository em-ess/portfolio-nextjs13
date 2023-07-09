import "./globals.css";
import clsx from "clsx";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });
const graphik = localFont({
  src: [
    {
      path: '../public/fonts/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Graphik-Medium.ttf',
      weight: '600',
      style: 'bold',
    },
  ],
  variable: '--font-graphik',
  display: 'swap',
});

export const metadata = {
  title: "Michelle Song Dev",
  description: "Portfolio site generated by Next App v13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    className={clsx("text-black bg-white", graphik.variable)}>
      <body className="max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
