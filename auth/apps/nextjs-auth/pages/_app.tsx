import "./global.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { AuthContextProvider } from "context/AuthContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}
