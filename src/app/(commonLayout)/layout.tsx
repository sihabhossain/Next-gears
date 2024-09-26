import type { Metadata } from "next";
import NavBar from "./components/page/shared/Navbar";
import Footer from "./components/page/shared/Footer";

export const metadata: Metadata = {
  title: "Apollo Gears",
  description: "Next Level Riding Sharing Service",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
