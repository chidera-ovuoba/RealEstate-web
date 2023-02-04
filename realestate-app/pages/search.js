import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon, Button } from '@chakra-ui/react';
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import Default from '../assests/default.png'
import { baseUrl, fetchApi } from "../../utils/fetchApi";
const Search = ({propertiesAll}) => {
    const router = useRouter();
    const [properties, setProperties] = useState(propertiesAll?.length > 9 ? propertiesAll?.filter((item,i)=> i < 9):propertiesAll);
    const [showMore, setShowMore] = useState(false);
    const showRef = useRef(null);
    const [page, setPage] = useState(1)


    const changeShowOrLess = () => {
        setShowMore((prev) => !prev);
        showMore ?  setProperties(propertiesAll?.filter((item, i) => i < 9)) : setProperties(propertiesAll) ;
    }


    useEffect(() => {
        showRef.current.scrollIntoView(false)

    }, [showMore])

    return (
        <Box mt='20'>
            <Flex
                cursor='pointer'
                sx={{background: '#f1f1f1',pt:'1rem',boxShadow: '0 0 0 100vmax #f1f1f1',clipPath: 'inset(0 -100vmax)'
    }}
                p='2'
                fontWeight='black'
                fontSize='lg'
                justifyContent='center'
                alignItems='center'
            >
                <Text>Search Property By Filters</Text>
                <Icon as={BsFilter} paddingLeft='3' w='7' />
                
            </Flex>
            <SearchFilters />
            <Box py='8rem'>
            <Text fontSize='2xl' p='4' fontWeight='bold'>
            Properties {router.query.purpose}
            </Text>
            <Flex flexWrap='wrap' justifyContent='center' alignItems='center'>
                {properties?.map((property) => <Property property={property} key={property.id} />)}
                </Flex>
                {
                    properties?.length === 0 || properties === null && (<Flex justifyContent='center' alignItems='center' marginTop='5' marginBottom='5' flexDirection='column'>
                    <Image alt="no result" src={Default} />
                    <Text fontSize='2xl' marginTop='3'>No Results Found</Text>
                    </Flex>)
                }
                <Text ref={showRef} fontSize='2xl' sx={{'&:hover':{cursor:'pointer',color:'#3a8dff'},pt:'4rem',justifySelf:'start'}} onClick={changeShowOrLess}>{showMore ?'show less':'show more'}</Text>
            </Box>
        </Box>
    )
}

export async function getServerSideProps({ query }) {
    const purpose = query?.purpose || 'for-rent';
    const rentFrequency = query?.rentFrequency || 'yearly';
    const minPrice = query?.minPrice || '';
    const maxPrice = query?.maxPrice || '';
    const roomsMin = query?.roomsMin || '';
    const bathsMin = query?.bathsMin || '';
    const roomsMax = query?.roomsMax || '';
    const bathsMax = query?.bathsMax || '';
    const sort = query?.sort || '';
    const areaMax = query?.areaMax || '';
    const areaMin = query?.areaMin || '';
    const categoryExternalIDs = query?.categoryExternalIDs || '';
    const hasVideo = query?.hasVideo || false;
    const hasFloorPlan = query?.hasFloorPlan || false;
    const hasPanorama = query?.hasPanorama || false;
    const furnishingStatus = query?.furnishingStatus || ''
    
  const properties = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002,6020&purpose=${purpose}&hitsPerPage=15&page=0&lang=en&sort=${sort}&rentFrequency=${rentFrequency}&categoryExternalID=${categoryExternalIDs}&minPrice=${minPrice}&maxPrice=${maxPrice}&areaMin=${areaMin}&areaMax=${areaMax}&roomsMin=${roomsMin}&roomsMax=${roomsMax}&bathsMin=${bathsMin}&bathsMax=${bathsMax}&furnishingStatus=${furnishingStatus}&hasVideo=${hasVideo}&hasFloorPlan=${hasFloorPlan}&hasPanorama=${hasPanorama}`)
  return {
    props: {
          propertiesAll: properties?.hits || null,
        
    }
  }
}

export default Search;