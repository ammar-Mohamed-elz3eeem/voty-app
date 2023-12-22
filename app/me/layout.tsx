import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopNav from "@/components/TopNav";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-secondary min-h-screen">
      <Header />
      <main className="flex flex-row flex-wrap gap-32 items-center container mx-auto justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
