import Head from 'next/head'
import { Inter } from '@next/font/google'

import About from '@/components/home-page/about';
import Form from '@/components/home-page/form';
import LinkWindow from '@/components/home-page/linkWindow';

// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hide your message</title>
        <meta name="description" content="Make your message readable only once" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
      <Form />
      <LinkWindow />
    </>
  )
}