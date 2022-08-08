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
    
  const properties = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=${query.purpose}&hitsPerPage=25`)
//   const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=25`);
  return {
    props: {
      properties: properties?.hits,
    //   propertiesForRent:propertyForRent?.hits || null
    }
  }
}

export default Search;