import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return <div className="h-screen place-items-center">{children}</div>;
}

export default Layout;
