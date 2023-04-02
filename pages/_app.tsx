import '@/styles/globals.css'
import '@/styles/bootstrap.min.css'
import '@/styles/templatemo.css'
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Script from 'next/script'
import type { AppProps } from 'next/app'

import Layout from '@/components/Layout/layout'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Horizontal Grads Training Portal</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <script async src="https://code.jquery.com/jquery-3.6.4.js" />
            </Head>
            <Layout>
                <Script src="/scripts/bootstrap.bundle.min.js" async />
                <Script src="/scripts/templatemo.js" async />
                <Script src="/scripts/custom.js" async/>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
