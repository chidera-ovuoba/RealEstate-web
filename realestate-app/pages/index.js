import Link from 'next/link';
import Image from 'next/image';
import { FaHome } from 'react-icons/fa';
import { Flex, Button, Box, Text} from '@chakra-ui/react';
import { fetchApi,baseUrl } from '../../utils/fetchApi';
import Property from '../components/Property';
import { useState } from 'react';
import { useRouter } from 'next/router';


const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, imageUrl, linkName }) => {
 

  return(
 
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' my='10'>
    <Image src={imageUrl} alt='banner' width={500} height={300} />
    <Box p='5'>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
      <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
      <Text color='gray.700' fontSize='lg' paddingTop='3' paddingBottom='3'>{desc1}<br />{desc2}</Text>
      <Button size='md' colorScheme="facebook" variant='solid' leftIcon={<FaHome />} >
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
    </Flex>

  )
}

var page = 0 



export default function Home({ propertiesForRent, propertiesForSale }) {
  const router = useRouter();
//   const [page, setPage] = useState(router.query.page);
//   function setPageNum(num) {
//     const { query } = router;
//     // console.log(query)
//     query.page = num;
//   // console.log(router.);
//     router.replace({ pathname: router.pathname,query});
// }

 
  return (
   
    <div style={{display:'grid',background:'red',placeItems:'center',marginTop:'100px'}} >
      
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Renting'
        linkName ={{
            pathname: '/search',
            query: { purpose: 'for-rent' }
          }}
       imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbFmY1MwTFd9-x4HVS-J56ih4jEa7bwMh6cw&usqp=CAU&q=100'
        />
    
        <Flex flexWrap='wrap' alignItems='center' justifyContent='center' >
        {
            propertiesForRent?.map((property) => <Property key={property.id} property={property} />)
        }
      </Flex>
     {/* <Flex m='4' alignItems='center' justifyContent='center' gap='2'>
        <Button onClick={()=>{
          setPageNum(page < 3 ? page : page - 1)
  
        }}>{page < 3 ? page + 1:page}</Button>
        <Button onClick={() =>{
           setPageNum(page < 3 ? page + 1 : page)
    
          }}>{page < 3 ? page + 2: page + 1}</Button>
        <Button onClick={() =>{
           setPageNum(page < 3 ? page + 2: page + 1)
    
          }}>{page < 3 ? page + 3: page + 2}</Button>
        ....
        <Button onClick={()=>{
          setPageNum(1999)
  
        }}>2000</Button>
      
      </Flex>*/}
      
        <Banner
        purpose='BUY A HOME'
        title1='Find, Buy, Own & Your'
        title2='Dream Home'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Buying'
        linkName ={{
            pathname: '/search',
            query: { purpose: 'for-sale' }
          }}
           imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStXAnyPh5ARh0sKePAyYyHR2htWIouqqqjiUOQhUHN6tcAKiIMUM17uKAi-l7EPo1JaS0&usqp=CAU&q=100'
        />
   
          <Flex flexWrap='wrap' alignItems='center' justifyContent='center' >
        {
            propertiesForSale?.map((property) => <Property key={property.id} property={property} />)
        }
        </Flex>
       
      </div>
      )
}
// console.log(page);
export async function getServerSideProps({query}) {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=25`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=25&page=${query.page || 0}`);
  return {
    props: {
      propertiesForSale: propertyForSale?.hits || null,
      propertiesForRent:propertyForRent?.hits || null
    }
  }
}
