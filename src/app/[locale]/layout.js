import {Poppins } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Poppins({ subsets: ["latin"], weight:[ "400","700"] });

// export const metadata = {
//   title: "Ai-Mecca Touring",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();
  return (
    <html lang={locale} className="m-0 p-0 scroll-smooth ">
      <body className={`${inter.className}  h-full w-full `}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
