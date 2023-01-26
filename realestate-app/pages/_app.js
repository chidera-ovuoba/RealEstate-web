import Router from 'next/router';
import Head from 'next/head';
// import nProgress from 'nprogress';
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react'
// import { Html, Head} from 'next/document'
import Layout from '../components/Layout';


export const styles = {
    subHeading: {
    fontFamily:" 'Poppins', sans-serif",
    marginBottom: '0.5rem',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '30px',
    color: '#3a86ff',
    },
    Heading: {
    fontSize:' 38px',
    lineHeight:'50px',
    fontWeight: 700,
    textTransform: 'capitalize', 
    '@media (width < 500px)':{
        fontSize:'30px'
    }
    },
    p: {
    marginTop:'1rem',
    fontSize:' 16px',
    lineHeight:' 27px',
    color: '#6c7a87',
    fontFamily: "'Poppins', sans-serif",    
    },
    btn:{
    color: '#fff',
    backgroundColor:'#3a86ff',
    border: '1px solid  #3a86ff',
    padding: '12px 45px',
    fontSize:' 16px',
    lineHeight:' 30px',
    fontWeight: 600,
    transition: '0.3s ease-in',
    borderRadius: '35px',
  },
      section_main: {
        background: '#f1f1f1',
        py:'5rem',
        boxShadow: '0 0 0 100vmax #f1f1f1',
        clipPath: 'inset(0 -100vmax)'
    },
    
}

export default function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  return (
    <>
     
      <Head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
      </Head>
      <ChakraProvider>
      <Layout>
      <Component {...pageProps} />
        </Layout>
        </ChakraProvider>
       
      </>
  )
}


