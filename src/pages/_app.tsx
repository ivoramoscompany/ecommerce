import {AppProps} from 'next/app'
import React from 'react'
import { GlobalStyle } from '../../styles/global'
import { Header } from '../components/Header'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
