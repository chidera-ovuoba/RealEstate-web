import Link from "next/link"
import Image from "next/image"
import { Box,Flex,Text,Avatar, Badge } from "@chakra-ui/react"
import { FaBed,FaBath } from "react-icons/fa"
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import Default from '../assests/default.png'

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => {
 
    return (
     
      <Link href={`/property/${encodeURIComponent(externalID)}`} passHref>
            <Flex flexWrap='wrap' boxShadow='dark-lg' maxW="390px" m='3' borderRadius="lg"
                _hover={{
                    boxShadow: 'lg',
                    transform: 'scale(1.05)',
                    zIndex:2
                }} justifyContent='flex-start' cursor='pointer' borderWidth="1px"
              transition=' all 0.5s ease-in-out'
            >
              <Box>
              <Image src={ coverPhoto.id === 249795541 || coverPhoto.id === 233374976  ? Default: coverPhoto?.url } width={400} height={260} alt='house' style={{borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
              </Box>
              <Box w='full' px='15px' paddingBottom='10px'>
                  <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                      <Flex alignItems='center'>
                          <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
                 <Badge fontWeight='bold' colorScheme="green" fontSize='lg'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Badge>
                      </Flex>
                      <Box>
                          <Avatar size='md' src={agency?.logo?.url} />
                      </Box>
                  </Flex>
                  <Flex fontSize='xl' fontWeight="semibold" alignItems='center' p='1' justifyContent='space-between' w='250px'  color='blue.400'>
                  {rooms} <FaBed/> | {baths} <FaBath/> | {millify(area)} sqft <BsGridFill/> 
                  </Flex>
                  <Text fontSize='lg' fontWeight="semibold">{title.length > 30 ? `${title.substring(0,30)}...`: title }</Text>
              </Box>
          </Flex>
      </Link>
  )
}

export default Property