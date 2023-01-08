import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfólio - Gustavo Silva</title>
        <meta
          name="description"
          content="Portifólio para ficar registrado projetos feitos por mim"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
