import React, { useEffect, useState,useRef} from 'react'
import { Image, Badge, Box, Flex, HStack, Icon, Input, Text } from '@chakra-ui/react'
import { baseUrl, fetchApi } from '../../utils/fetchApi'
import {List,ListItem,ListIcon} from '@chakra-ui/react'
import { useRouter } from 'next/router';
// import Image from 'next/image';
import { MdOutlineRealEstateAgent } from 'react-icons/md'
import { AiOutlineDollar } from 'react-icons/ai';
import Link from 'next/link';
const Agency = ({ agency,allAgencies }) => {
    const [input, setInput] = useState('');
    const router = useRouter();
    const [agencies, setAgencies] = useState([]);
    
    console.log(agency);
    useEffect(() => {
        router.query['agent'] = input
        // console.log(router.query.agent)
        router.replace({pathname:router.pathname,query:router.query});
        // console.log(inputRef.current);
    },[input])
    
    useEffect(() => {
        agency?.length > 4 ? setAgencies(agency.slice(0, 4)) : setAgencies(agency)
    },[input,agency])
  return (
      <>
          <Box display='grid' placeItems='center' mb='20px'>
              <Input variant='filled' htmlSize={50} width='auto' mt='20px' mb='20px' 
               value={input}
                  onChange={(e)=>setInput(e.target.value)}
              />
              { (agencies && input) && <Box display='grid' gap={3} placeItems='center' p='9' sx={{ background: 'green.100' }}>
                  {
                      input.length > 0 &&
                      agencies?.map(({ name, id }) => (
                          <List spacing={3} key={name}>
                              <Link href={`/agencyname/${name.split(' ').join('').trim().substr(0, 2)}+${id}`} passHref >
                                  <ListItem sx={{_hover:{textDecoration:'underline',cursor:'pointer'}}}>
                     
                                      <ListIcon as={MdOutlineRealEstateAgent} color='green.500' />
                                      {name}
                
                                  </ListItem>
                              </Link>
                          </List>
                      ))}
              </Box>} 
              <Flex m='20px' flexWrap='wrap'  gap={5} alignItems='center' justifyContent='center'>
                  {allAgencies?.map(({ logo: { url }, product, name,id }) => (
                         <Link href={`/agencyname/${name.split(' ').join('').trim().substr(0,2)}+${id}`} passHref>
                          <Flex alignItems='center' justifyContent='space-around' flexDirection='column' w='200px'>
                             <Image boxSize='160px' src={url} paddingBottom='10px' objectFit='contain' fallbackSrc='https://tenderpixel.com/wp-content/themes/tenderpixel_wp/images/loading_5.gif' />
                               
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

export async function getServerSideProps({query}){ 
    const agency =  query.agent && await fetchApi(`${baseUrl}/agencies/list?query=${query.agent}`) ;
    const allAgencies = await fetchApi(`${baseUrl}/agencies/list?query=''`);

    return {
        props: {
            agency: agency?.hits || null,
            allAgencies: allAgencies?.hits
        }
      
    }
}

export default Agency;