import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { styles } from '../pages/_app'

const Footer = () => {
    const footerStyles = {
        joinUsSection: {
            width: '100%',
            py: '5rem',
            justifyContent: 'space-between',
            background: 'rgb(29, 29, 29)',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            boxShadow: '0 0 0 100vmax rgb(29, 29, 29)',
            clipPath: 'inset(0 -100vmax)',
            borderBottom:'2px solid rgb(219, 219, 219)'
        }
    }
  return (
    <>
    <Box as='section'>
    <Flex sx={footerStyles.joinUsSection}>
    <Box>
    <Heading sx={{color:'white',mb:'1rem'}}>Become A Real Estate Agent</Heading>
    <Text sx={{color:'white',fontSize:'20px'}}>We only work with the best companies around the globe.</Text>
    </Box>
    <Button sx={styles.btn} style={{fontSize:'20px',padding:'1.3rem 3rem'}}>Join Us</Button>
    </Flex>
    </Box>
    </>
  )
}

export default Footer