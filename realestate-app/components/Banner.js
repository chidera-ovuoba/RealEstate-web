import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { FaHome } from 'react-icons/fa';

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, imageUrl, linkName }) => {
 

  return(
 
  <Flex flexWrap='wrap' justifySelf='start' justifyContent='space-between' alignItems='center' width='100%'  mb='20'>
  <Box py='5'>
  <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
  <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
  <Text color='gray.700' fontSize='lg' paddingTop='3' paddingBottom='3'>{desc1}<br />{desc2}</Text>
  <Button size='md' background="#3a86ff" variant='solid'  leftIcon={<FaHome />} >
  <Link href={linkName}>{buttonText}</Link>
  </Button>
  </Box>
  <Image src={imageUrl} alt='banner' width={600} height={350} priority={true}  />
    </Flex>

  )
}

export default Banner