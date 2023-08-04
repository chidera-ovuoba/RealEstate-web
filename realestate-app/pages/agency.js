import React from 'react'
import { Badge, Box, Flex, HStack, Icon, Input, Text } from '@chakra-ui/react'
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Image from 'next/image';
import { AiOutlineDollar } from 'react-icons/ai';
import Link from 'next/link';
const Agency = ({ allAgencies }) => {
 
  return (
      <>
          <Box display='grid' placeItems='center' mb='50px'>
              <Flex m='20px' flexWrap='wrap'  gap={5} alignItems='center' justifyContent='center'>
                  {allAgencies?.map(({ logo: { url }, product, name,id }) => (
                         <Link href={`/agencyname/${name}`} passHref key={id}>
                          <Flex alignItems='center' justifyContent='space-around' flexDirection='column' w='200px'>
                             <Image width='160px' height='160px' placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAQAAABeK7cBAAAADUlEQVR42mNkqGdgAAABhwCBzSx0yAAAAABJRU5ErkJggg==' src={url} style={{paddingBottom:'20px'}} objectFit='contain' alt='' />
                               
                          <Text fontSize='15px' color='tomato' noOfLines={[1, 2, 3]} textAlign='center' >
                              {name}
                          </Text>
                          <HStack spacing='10px' w='100%' display='flex' justifyContent='center'>
                              <Icon as={AiOutlineDollar} w={6} h={6} color='green.400' />
                              <Badge fontWeight='bold' fontSize='17px' colorScheme='whatsapp' color='green.400'>{product}</Badge>
                          </HStack>
                      </Flex>
                        </Link>    
  ))}
              </Flex>
          </Box>
      </>
  )
}

export async function getServerSideProps(){ 
    const allAgencies = await fetchApi(`${baseUrl}/agencies/list?query=''&hitsPerPage=5`);

    return {
        props: {
            allAgencies: allAgencies?.hits
        }
      
    }
}

export default Agency;