import '@/styles/globals.css'
import '@/styles/bootstrap.min.css'
import '@/styles/templatemo.css'

import Script from 'next/script'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return <>
        <Script src="/scripts/bootstrap.bundle.min.js" />
        <Script src="/scripts/templatemo.js" />
        <Script src="/scripts/custom.js" />
        <Component {...pageProps} />
        </>
}
