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
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
