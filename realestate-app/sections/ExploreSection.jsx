import { Center, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Banner from '../components/Banner'
import Property from '../components/Property'
import { styles } from '../pages/_app';
import rentHome from '../assests/g3.jpg';
import saleHome from '../assests/g5.jpg';
import { useState } from 'react';
import { useRouter } from 'next/router';

const ExploreSection = ({ propertiesForRent, propertiesForSale }) => {
//       const router = useRouter();
//   const [page, setPage] = useState(router.query.page);
//   function setPageNum(num) {
//     const { query } = router;
//     // console.log(query)
//     query.page = num;
//   // console.log(router.);
//     router.replace({ pathname: router.pathname,query});
// }
  return (
      <>
      <Center py='5rem' flexDirection='column' >
              <Flex justifyContent='center' alignItems='center' textAlign='center' flexDirection='column' mb='3rem'>
                  <Text sx={styles.subHeading}>EXPLORE</Text>
                   <Heading sx={styles.Heading}>Explore Property By Preferences</Heading>
              </Flex>
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
       imageUrl={rentHome}
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
        title1='Find, Buy, & Own Your'
        title2='Dream Home'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Buying'
        linkName ={{
            pathname: '/search',
            query: { purpose: 'for-sale' }
          }}
          imageUrl={saleHome}
        />
   
          <Flex flexWrap='wrap' alignItems='center' justifyContent='center' >
        {
            propertiesForSale?.map((property) => <Property key={property.id} property={property} />)
        }
        </Flex>
        </Center>      
      </>
  )
}

export default ExploreSection