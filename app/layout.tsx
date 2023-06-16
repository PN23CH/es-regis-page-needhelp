import "./style/globals.css";
import { Kanit } from "next/font/google";
import Navbar from "./components/Navbar";
import EsFooter from "./components/EsFooter";
import Regis from "./pages/Regis";
import esLogo420 from "@/public/es-logo420.svg";
import Image from "next/image";

const kanit = Kanit({
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "e-Service Login",
  description: "เทศบาลตำบล องค์การบริหารส่วนตำบล",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <div className="flex w-full justify-center sticky">
          <Navbar />
        </div>
        <div className="flex justify-center my-16">
          <Image src={esLogo420} alt="big-logo" />
        </div>
        <div className="min-h-screen">
          <Regis />
        </div>
        <EsFooter />
        {children}
      </body>
    </html>
  );
}
