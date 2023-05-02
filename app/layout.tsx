"use client";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ReadyToGetStarted from "@/components/layout/ReadyToGetStarted";
import Provider from "@/context/Provider";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css'
import AppModal from "@/components/layout/AppModal";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify"
import dynamic from "next/dynamic";

const ShareHead = dynamic(()=> import("@/components/layout/Header"),{ssr:false})

const metadata = {
  title: "Sodality",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if(pathname == "/login" || pathname == "/register") return (
    <>
      <html lang="en">
        <body>
          <Provider>
          <ToastContainer />
            <ShareHead />
            {children}
          </Provider>
        </body>
      </html>
    </>)
    
  return (
    <html lang="en">
      <body>
        <Provider>
        <ToastContainer />
          <ShareHead />
          {children}
          <ReadyToGetStarted />
          <Footer />
          <AppModal/>
        </Provider>
      </body>
    </html>
  );
}
