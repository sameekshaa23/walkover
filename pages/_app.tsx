import 'tailwindcss/tailwind.css'
import "@material-tailwind/react/tailwind.css";
import '../styles/globals.css'
import Head from 'next/head';
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps :{ session, ...pageProps } }: AppProps) {
  return ( 
  <SessionProvider session={session} refetchInterval={5*60}>

  <>
  <Head>
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
/>
  </Head>

  <Component {...pageProps} />

  </>
  </SessionProvider>
  );
}

export default MyApp
