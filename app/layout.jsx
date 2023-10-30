import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jamia Dars Fest 2023-'24",
  description: "Explore the vibrant world of artistic expression at Jamia Dars Fest - an extraordinary arts festival presented by Jami'a Nooriyya, the renowned Arabic College. Dive into a showcase of exceptional talent as Dars students bring you an array of captivating programs and darses, each brimming with creativity and passion. Discover the talents and programs that make this fest a truly unique experience, celebrating the rich diversity of artistry within our community. Join us in celebrating the beauty of artistic expression like never before!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       {children}
      </body>
    </html>
  );
}
