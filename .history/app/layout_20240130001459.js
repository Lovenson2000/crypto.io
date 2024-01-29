import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: [dark, neobrutalism]
    }}
    >
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
