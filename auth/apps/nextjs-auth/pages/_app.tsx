import "./global.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { AuthContextProvider } from "context/AuthContext";
import Head from "next/head";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Todo</title>
      </Head>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </>
  );
}
