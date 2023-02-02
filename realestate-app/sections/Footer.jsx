import { Box, Button, Center, Flex, Grid, Heading, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React from 'react'
import { styles } from '../pages/_app';
import {FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn,FaPaperPlane} from 'react-icons/fa'

const Footer = () => {
    const footerStyles = {
        joinUsSection: {
            width: '100%',
            py: '5rem',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            background: 'rgb(29, 29, 29)',
            boxShadow: '0 0 0 100vmax rgb(29, 29, 29)',
            clipPath: 'inset(0 -100vmax)',
            borderBottom:'2px solid rgb(219, 219, 219)'
          },
          footerContent: {
            boxShadow: '0 0 0 100vmax rgb(29, 29, 29)',
            clipPath: 'inset(0 -100vmax)',
            background: 'rgb(29, 29, 29)',
            flexWrap: 'wrap',
            py: '8rem',
            gap:'3rem',
            justifyContent: 'space-between',
            '& > *': {
              flex: '1',
            },
            '& input': {
              height: '60px',
              '&:focus': {
                background:'white'
                
              }
            }
        
      },
      footerContent_Middle: {
        display: 'flex',
        justifyContent:'space-between',
        gap: '2rem',
        flex:'2',
        minWidth: '380px',
        '@media (width < 500px)': {
          minWidth: '200px',
        flexWrap:'wrap',
        }
      },
      linkColumn: {
        minWidth:'180px'
      },
      input_button: {
        background: '#3a8dff',
        width: '40px',
        height: '40px',
        fontSize: '15px',
        color: 'white',
        textAlign:'center',
        borderRadius:'50%',
        margin: '10px 20px 0px 0px ',
        '&:hover': {
          cursor:'pointer'
        }
      },
      footer_heading: {
      fontSize: '18px',
      lineHeight: '25px',
      marginBottom: '20px',
      fontWeight: '600',
      color: '#fff',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      },
      footer_p: {
      color: '#fff',
      fontSize: '15px',
      marginBottom: '18px',
      lineHeight: '20px',
      fontWeight: 'normal',
        textDecoration: 'none',
        '&:hover': {
        color:'#3a86ff',
        cursor:'pointer'
      }
      },
      footer_social_container: {
        display: 'flex',
        width: '80%',
        marginTop: '2rem',
        gap:'1rem',
        alignItems:'center',
        '& > span': {
          width: '30px',
          height: '30px',
          display: 'grid',
          placeItems:'center',
          borderRadius: '50%',
          background: '#fff',
          '&:hover': {
            background: '#3a86ff',
            color:'white'
          }
        }
      },
      footer_subHeading: {
      fontSize: '16px',
      lineHeight:' 27px',
      color: '#ccc',
      marginBottom:'20px',
      width:'30ch',
      fontFamily: "'Poppins', sans-serif",
      '@media (width < 400px)':{
        width:'25ch'
      }
      },
      footer_copyright: {
      background: 'rgb(29, 29, 29)',
      boxShadow: '0 0 0 100vmax rgb(29, 29, 29)',
      clipPath: 'inset(0 -100vmax)',
      }
    }

   const footerSocial = [<FaFacebookF/>,<FaTwitter/>,<FaLinkedinIn/>,<FaInstagram/>]
  
  const footerLinkData = [
    {
     heading:'POPULAR SEARCHES',
     links:['Features','Offices for Rent','Latest News', 'Offices for Buy','Support']
    },
    {
     heading:'QUICK LINKS',
     links:['About Us','Join our team','Contact us', 'Press release','Careers']
    },
  ]
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
    <Flex sx={footerStyles.footerContent}>
    <Box>
    <Heading as='h3' sx={footerStyles.footer_heading}>CONTACT US</Heading>
    <Text as='h5' sx={footerStyles.footer_subHeading}>Lorem ipsum dolor sit amet elit. Velit beatae ullam dolore.</Text>
    <Text as='p' sx={footerStyles.footer_p}>support@Estates.com</Text>
    <Text as='p' sx={footerStyles.footer_p}>+(21) 255 989 8088</Text>
    <Flex sx={footerStyles.footer_social_container}>
    {
      footerSocial.map((item,i)=>(<Box as='span' key={i}>{item}</Box>))
    }
    </Flex>
    </Box>
    <Flex sx={footerStyles.footerContent_Middle}>
    {
      footerLinkData.map(({heading,links})=>(
        <Grid sx={footerStyles.linkColumn} key={heading}>
          <Heading sx={footerStyles.footer_heading}>{heading}</Heading>
          {
            links.map((item) => (
              <Text as='p' sx={footerStyles.footer_p} key={item}>{item}</Text> 
            ))
          }
        </Grid>
      ))
    }
    </Flex>
    <Box>
     <Heading sx={footerStyles.footer_heading}>SUBSCRIBE TO OUR NEWSLETTER</Heading>
     <Text sx={footerStyles.footer_subHeading}>Enter your email and receive the latest news from us.</Text>
     <InputGroup maxWidth='500px'>
     <Input placeholder='Your Email Address' variant='filled' />
     <InputRightElement sx={footerStyles.input_button}>
     <FaPaperPlane/>
     </InputRightElement>
     </InputGroup>
     </Box>
     </Flex>
      </Box>
      <Box sx={footerStyles.footer_copyright} textAlign='center' p='5' color='#fff' borderTop='2px' borderColor='gray.100'>
    2022 EstateMongar,inc.
    </Box>
    </>
  )
}

export default Footer