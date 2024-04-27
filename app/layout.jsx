import { Inter } from "next/font/google";
import "./globals.css";
import SideNavbar from "@/app/ui/Sidebar/Sidebar";
import BottomNavigation from "@/app/ui/BottomNavigation/BottomNavigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fafafa]`}>
        <div className='selection:bg-lime'>
          <SideNavbar />
        </div>
        <div className="lg:ml-72 selection:bg-lime bg-[#fafafa]">
          {children}
        </div>
        <BottomNavigation />
      </body>
    </html>
  );
}
