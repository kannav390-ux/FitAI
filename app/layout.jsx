import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
});

export const metadata = {
  title: "Fitness AI",
  description: "AI Fitness Coach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <link
    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
    rel="stylesheet"
  />
</head>
      <body className={font.className}>
      <div className="transition-all duration-300 ease-in-out">
          {children}
        </div>
      </body>
    </html>
  );
}