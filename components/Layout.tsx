import Head from "next/head";
import { FC, useEffect, useState } from "react";
import ThemeButton from "./ThemeButton";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <main
      className="
      overflow-x-hidden overflow-y-auto
      relative
      flex flex-col items-center justify-center
      bg-zinc-200 text-zinc-700
      dark:bg-zinc-900
      dark:text-zinc-400 
      max-h-screen
      min-h-screen min-w-full max-w-[100vw]"
    >
      <Head>
        <title>Anish Kanna</title>
        <meta name="description" content="anish kanna portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeButton />

      {children}
    </main>
  );
};

export default Layout;
