import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import Default from '../assests/default.png'
import { baseUrl, fetchApi } from "../../utils/fetchApi";
const Search = ({properties}) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex
                cursor='pointer'

                bg='gray.100'
                borderBottom='2px'
                borderColor='gray.200'
                p='2'
                fontWeight='black'
                fontSize='lg'
                justifyContent='center'
                alignItems='center'
                onClick={()=>setSearchFilters((prev)=>!prev)}
            >
                <Text>Search Property By Filters</Text>
                <Icon as={BsFilter} paddingLeft='3' w='7' />
                
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text fontSize='2xl' p='4' fontWeight='bold'>
                Properties {router.query.purpose}
            </Text>
            <Flex flexWrap='wrap'>
                {properties.map((property) => <Property property={property} key={property.id} />)}
            </Flex>
            {
                properties.length === 0 && (<Flex justifyContent='center' alignItems='center' marginTop='5' marginBottom='5' flexDirection='column'>
                    <Image alt="no result" src={Default} />
                    <Text fontSize='2xl' marginTop='3'>No Results Found</Text>
                </Flex>)
            }
        </Box>
    )
}

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const roomsMax = query.roomsMax || '10';
    const bathsMax = query.bathsMax || '10';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const areaMin = query.areaMin || '1000';
    const locationExternalIDs = query.locationExternalIDs ||'5002'
    const categoryExternalIDs = query.categoryExternalIDs || '4';
    const hasVideo = query.hasVideo || false;
    const hasFloorPlan = query.hasFloorPlan || false;
    const hasPanorama = query.hasPanorama || false;
    const furnishingStatus = query.furnishingStatus || 'furnished'
    
  const properties = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&hitsPerPage=25&page=0&lang=en&sort=${sort}&rentFrequency=${rentFrequency}&categoryExternalID=${categoryExternalIDs}&minPrice=${minPrice}&maxPrice=${maxPrice}&areaMin=${areaMin}&areaMax=${areaMax}&roomsMin=${roomsMin}&roomsMax=${roomsMax}&bathsMin=${bathsMin}&bathsMax=${bathsMax}&furnishingStatus=${furnishingStatus}&hasVideo=${hasVideo}&hasFloorPlan=${hasFloorPlan}&hasPanorama=${hasPanorama}`)
  return {
    props: {
      properties: properties?.hits,
    //   propertesForRent:propertyForRent?.hits || null
    }
  }
}

export default Search;