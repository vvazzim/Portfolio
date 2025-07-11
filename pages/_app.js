import '../styles/globals.css';
import Head from 'next/head';

//components
import Layout from "../components/Layout";
import Transition from '../components/Transition'

//router
import { useRouter } from 'next/router';

//framer motion
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
  return(
      <Layout>
        <Head>
            <link rel="icon" type="image/png" href="/favicon.png" />
            <title>WASSIM CHIKHI</title>
        </Head>
          <AnimatePresence mode={'wait'}>
              <motion.div key={router.route} className={'h-full'}>
                  <Transition/>
                  <Component {...pageProps} />
              </motion.div>
          </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
