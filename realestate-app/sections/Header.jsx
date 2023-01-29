import Link from 'next/link';
import bannerImg from '../assests/2.png'
import { Flex, Box, Text, Button, Heading, Center } from '@chakra-ui/react';
import Image from 'next/image';
import { styles } from '../pages/_app';


const Header = () => {
  return (
      <>
          <Flex justifyContent='space-between' width='100%' flexWrap='wrap' gap='2rem' mt='2rem' alignItems='flex-end' py='6rem'>
              <Box flex='1 1 450px'>
                  <Text sx={styles.subHeading}>A HIGHER QUALITY OF LIVING</Text>
                  <Heading sx={styles.Heading}>The Ideal Space To Balance Life, Work And Play.</Heading>
                  <Text sx={styles.p}>Semper at. Lorem ipsum dolor sit amet elit elit. Non quae, ad esse et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sed.</Text>
                  <Flex wrap='wrap' alignItems='center' mt='2rem'  gap='1.4rem'>
                  <Link href={{  pathname: '/search',  query: { purpose: 'for-sale' }}}>
                  <Button sx={styles.btn}>Get Started</Button>
                  </Link>
                  <Link href={{  pathname: '/search',  query: { purpose: 'for-sale' }}}>
                  <Button sx={styles.btn}>Contact Us</Button>
                  </Link>
                  </Flex>
              </Box>
              <Box flex='1 1 450px'>
              <Image src={bannerImg} alt='header_img'/>
              </Box>
          </Flex>
      </>
  )
}

export default Header