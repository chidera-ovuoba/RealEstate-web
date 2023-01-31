import Navbar from './Navbar'
import Footer from '../sections/Footer'
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
export default function Layout({ children }) {
  return (
      <>
          <Head>
          <title>Real Estate</title>
          </Head>
          <Box maxWidth='1450px' m=' 0 auto'>
          <Box m='0 2rem'>
              <header>
                <Navbar/> 
              </header>
              <main>{children}</main>
              <footer>
                <Footer/> 
              </footer>
            </Box>
          </Box>
   
    </>
  )
}