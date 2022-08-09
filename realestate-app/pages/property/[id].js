import { Box, Flex, Spacer, Text, Avatar } from '@chakra-ui/react';
import { FaBed,FaBath } from "react-icons/fa"
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import Default from '../assests/default.png'
import { fetchApi, baseUrl } from '../../../utils/fetchApi';

const PropertyDetail = (propertyDetail) => (
    // console.log(propertyDetail)
    <Box maxWidth='1000px' margin='auto' p='4'>
    
    </Box>
);

export default PropertyDetail;

export async function getServerSideProps({params:{id}}) {
    const propertyDetail = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetail
        }
    }
}