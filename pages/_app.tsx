import Head from "next/head";

import Layout from "@/components/layout/Layout";
import { NotificationContextProvider } from "@/store/NotificationContext";

import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
      <Layout>
        <>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <meta name="description" content="NextJS Events" />
            <title>Next Events</title>
          </Head>
          <Component {...pageProps} />
        </>
      </Layout>
    </NotificationContextProvider>
  );
}
