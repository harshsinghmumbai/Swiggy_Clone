import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Swiggy Clone",
  description: "Created Swiggy Clone using Next.js framework",
  icons: {
    icon: ["/logo.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-[1440px] m-auto">
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
