import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={` fade-in`}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}

export const metadata = {
  title: "We have AE at home",
  description: "The acoustoelectric effect",
};
