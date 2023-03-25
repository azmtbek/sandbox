import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white ">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
