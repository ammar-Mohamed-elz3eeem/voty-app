import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopNav from "@/components/TopNav";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col bg-secondary">
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
