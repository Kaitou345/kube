import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kube",
  description: "Placeholder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-white ${inter.className} `}>
        <video
          src="/bg.mp4"
          muted
          autoPlay
          loop
          className="w-full h-full object-cover fixed -z-50 left-0 right-0 top-0 bottom-0"
        ></video>
        {children}
      </body>
    </html>
  );
}
