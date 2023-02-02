import { Box, Center, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { styles } from '../pages/_app'
const stylesCard = {
  serviceCard: {
    background: 'white',
    width: '300px',
    height: '300px',
    borderRadius: '20px',
    padding: '20px',
    '&:first-of-type span::before': {
      content: '"\\1F340"',
      fontSize:'40px'
    },
    '&:nth-of-type(2) span::before': {
      content: '"\\1F4C8"',
      fontSize:'40px'
    },
    '&:nth-of-type(3) span::before': {
      content: '"\\1F680"',
      fontSize:'40px'
    },
    '&:last-of-type span::before': {
      content: '"\\1F4BC"',
      fontSize:'40px'
    }
  },
  designIconContainer: {
    width: '65px',
    height: '65px',
    borderRadius: '5px',
    background: '#3a86ff',
    textAlign:'center'
  }

}

const ServiceCard = ({item}) => {
  return (
    <Grid sx={stylesCard.serviceCard}  placeItems='center'>
      <Center as='span' sx={stylesCard.designIconContainer}></Center>
      <Heading sx={styles.Heading} style={{fontSize:'30px'}}>{item}</Heading>
      <Text sx={styles.p} style={{margin:0}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam libero dolorum pariatur</Text>
    </Grid>
  )
}

export default ServiceCard