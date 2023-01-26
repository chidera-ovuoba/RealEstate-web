import { Box, Center, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { styles } from '../pages/_app'
import { GiReceiveMoney, GiRank2,GiCutDiamond } from 'react-icons/gi';


const whyChooseUsData = [
    {
        title: 'Affordable and economical',
        icon:GiReceiveMoney()
    },
    {
        title: 'Luxurious and comfortable facilities',
        icon:GiCutDiamond()
    },
    {
        title: 'Ranked #2 in the most trusted companies awards',
        icon:GiRank2()
    },
]

const WCUStyles = {
    flex: {
        flexWrap:'wrap',
        py:'5rem',
        gap: '2rem',
    },
    cardContainer: {
        gap: '1rem',
        p: '2rem 1rem',
        background: '#f1f1f1',
        borderRadius: '6px',
        height: '280px',
        width: '330px',
        '&:first-of-type span': {
          color:'rgba(45, 166, 44)',
          background:'rgba(45, 255, 66, 0.37)'  
        },
        '&:nth-of-type(2) span': {
          color:'rgba(231, 0, 0)',
          background:'rgba(255, 0, 0, 0.36)'  
        },
        '&:last-of-type span': {
          color:'rgba(0, 0, 181)',
          background:'rgba(41, 211, 255, 0.37)'  
        }
    },
    cardHeading: {
        fontWeight: 500,
        fontSize:'20px'
    },
    icon_container: {
        fontSize: '50px',
        borderRadius: '50%',
        width: '15rem',
        placeItems:'center',
        height:'80px',
        background:'red'
    }
}

const WhyChooseUs = () => {
  return (
    <>
     <Center py='5rem' flexDirection='column' >
        <Flex justifyContent='center' alignItems='center' textAlign='center' flexDirection='column' mb='3rem'>
        <Text sx={styles.subHeading}>WHY CHOOSE US</Text>
        <Heading sx={styles.Heading}>Let The Benefits Speak For Themselves</Heading>
         </Flex>
         <Center sx={WCUStyles.flex}>
         {
             whyChooseUsData.map(({title,icon}) => (
            <Flex sx={WCUStyles.cardContainer}>
            <Grid as='span' sx={WCUStyles.icon_container}>{icon}</Grid>
            <Box>
            <Heading sx={WCUStyles.cardHeading}>{title}</Heading>
            <Text as='p' sx={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, consectetur!</Text>
            </Box>
            </Flex>
            ))
        }
        </Center>
     </Center>
    </>
  )
}

export default WhyChooseUs