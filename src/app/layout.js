import './globals.css'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: 'Tz-Hasan',
  description: 'Portfolio of Tajbeul islam | MERN stack web developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="max-w-[95%] mx-auto">{children}</div>
      </body>
    </html>
  );
}
