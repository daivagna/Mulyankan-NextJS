import '@/styles/globals.css'
import '@/styles/bootstrap.min.css'
import '@/styles/templatemo.css'
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { AppProps } from 'next/app'

import Layout from '@/components/layout/layout';
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <title>Zay Shop eCommerce HTML CSS Template</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
