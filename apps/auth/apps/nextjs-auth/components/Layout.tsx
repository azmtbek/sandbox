import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800
    dark:bg-slate-800 dark:text-white gap-3 ">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
