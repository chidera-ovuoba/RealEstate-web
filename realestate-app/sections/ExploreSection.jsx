import { Center, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Banner from '../components/Banner'
import { styles } from '../pages/_app';
import rentHome from '../assests/g3.jpg';
import saleHome from '../assests/g5.jpg';


const ExploreSection = () => {

  return (
      <>
      <Center py='5rem' flexDirection='column' id='ExploreSection'>
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

        </Center>      
      </>
  )
}

export default ExploreSection