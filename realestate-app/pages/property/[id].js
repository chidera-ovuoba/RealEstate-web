import { Box, Flex, Spacer, Text, Avatar, Badge } from '@chakra-ui/react';
import { FaBed,FaBath } from "react-icons/fa"
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import Default from '../../assests/default.png'
import { fetchApi, baseUrl } from '../../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';

const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, type, description, furnishingStatus, purpose, amenities, photos } }) => (
    // console.log(propertyDetail)
    <Box maxWidth='1000px' margin='auto' p='4'>
      {photos && <ImageScrollbar data={photos}/>}
        <Box w='full' p='6'>
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
                  <Box marginTop='2'>
                <Text fontSize='lg' fontWeight="bold" marginBottom='2'>{title}</Text>
                <Text color='gray.600' lineHeight='2'>{description}</Text>
                  </Box>
            <Flex flexWrap='wrap' justifyContent='space-between' textTransform='uppercase'  flexDirection='column'>
                <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
                    <Text>Type</Text>
                    <Text fontWeight='bold'>{type}</Text>
                </Flex>
                <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
                    <Text>Purpose</Text>
                    <Text fontWeight='bold'>{purpose}</Text>
                </Flex>
                {
                    furnishingStatus && (<>
                     <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
                    <Text>furnishing Status</Text>
                    <Text fontWeight='bold'>{furnishingStatus}</Text>
                    </Flex>
                    </>)
                }
            </Flex>
            <Box>
            {console.log(amenities)}
                {amenities.length && <Text fontWeight='black' fontSize='2xl' marginTop='5'>Amenities</Text>}
                <Flex flexWrap='wrap' >
                    {
                        amenities.map((item) => (
                            item.amenities.map((amenity) => (
                                <Text key={amenity.text}
                                    fontWeight='bold'
                                    color='blue.400'
                                    borderRadius='5'
                                    // fontSize='md'
                                    p='2'
                                    m='1'
                                    bg='gray.200'
                                >{amenity.text}</Text>
                            ))
                        ))
                }
                </Flex>
            </Box>
              </Box>
        </Box>
);

export default PropertyDetails;

export async function getServerSideProps({params:{id}}) {
    const propertyDetails = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetails
        }
    }
}