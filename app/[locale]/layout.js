import "./globals.css";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Footer } from "./components";
import { Navbar } from "./sections";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className="overflow-x-hidden">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

/*export default function RootLayout({ children, params }) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}*/
