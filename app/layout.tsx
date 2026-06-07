import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyJobSolution — Connecting Talent With Opportunity",
  description: "MyJobSolution is a growing recruitment and manpower consultancy company dedicated to helping job seekers find the right career opportunities and helping companies hire skilled candidates efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased font-open-sans"
    >
      <body className="min-h-full flex flex-col bg-white text-[#0D1F3C]">
        {children}
      </body>
    </html>
  );
}

