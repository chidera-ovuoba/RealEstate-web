import { Box, Button, Center, Flex, FormControl, Grid, Heading, Input, Text, Textarea } from '@chakra-ui/react'
import { styles } from './_app';
import { ImLocation2 } from 'react-icons/im';
import { MdCall } from 'react-icons/md';
import { FaRegEnvelope } from 'react-icons/fa';

const contactDataDetails = [
    {
        icon: [<ImLocation2 key={'1'}/>],
        title: 'Visit Us',
        desc:'EstateMongar,Shingashina district,Wall Maria,Paradis island'
    },
    {
        icon: [<MdCall key={'2'}/>],
        title: 'Call Us',
        desc:'+234 234 557 4567  +234 234 557 4568'
    },
    {
        icon: [<FaRegEnvelope key={'3'}/>],
        title: 'Email Us',
        desc:'support@gmail.com ovuobachidera18@gmail.com'
    },
]
// const detailcons =[<HiEnvelope/>, <IoCall/>,<ImLocation2/>]
const contactStyle = {
    details: {
        gap: '2rem',
        minWidth: '400px',
        placeSelf:'start',
        '@media (width < 500px)': {
            minWidth: '290px',
        }
    },
    main: {
        width:'100%',
        gap: '4rem',
        py:'5rem',
        justifyContent: 'space-between',
        flexWrap:'wrap',
        '& > *': {
            flex:'1'
        },
        '& > form': {
            display: 'grid',
            gap: '2rem',
            minWidth: '400px',
            maxWidth:'660px',
            '@media (width < 500px)': {
                minWidth: '290px',
            },
            '& input ,textarea': {
                borderColor: '#000',
                borderWidth:'2px',
                background: '#fff',
                outline:'none'
            },
            '& input': {
                height:'55px'
            },
            '& button': {
                background: '#3a8dff',
                justifySelf:'start'
            }
        }
    },
    detailRow: {
        gap:'1.4rem',
        alignItems: 'center',
        '&  h4': {
            lineHeight: '0px',
            fontSize: '23px',
            fontWeight: '600',
            marginBottom:'20px'
        },
        '&  span': {
            fontSize: '2rem',
            color: '#3a8dff',
            alignSelf:'flex-start'
        },
        '& p': {
            fontWeight: 'normal',
            fontSize: '18px',
            lineHeight: '28px',
            color: '#6c7a87'
        },
        '&:nth-of-type(2), &:nth-of-type(3)': {
            width:'30ch'
        }
    }
}

const contact = () => {

  return (
    <>
    <Center py='5rem' flexDirection='column' style={styles.section_main}  >
    <Flex justifyContent='center' alignItems='center' textAlign='center' flexDirection='column' mb='3rem'>
        <Text sx={styles.subHeading}>CONTACT US</Text>
        <Heading sx={styles.Heading}>Send A Message</Heading>
        </Flex>
        <Flex sx={contactStyle.main}>
         <Grid sx={contactStyle.details}>
          {
            contactDataDetails.map(({desc,icon,title},i)=>(
            <Flex sx={contactStyle.detailRow} key={i}>
            <Box as='span'>{icon}</Box>
            <Box>
            <Heading as='h4'>{title}</Heading>
            <Text>{desc}</Text>
            </Box>
            </Flex>
            ))
          }
         </Grid>        
         <FormControl as='form' isRequired>
         <Input placeholder='Your Name' type='text' name='name' />
         <Input placeholder='Your Email' type='email' name='email' />
         <Textarea resize='vertical' size='md' placeholder='Your Message' name='message' />
         <Button type='submit' variant='solid' onClick={(e)=>{e.preventDefault}}>Send Message</Button>
         </FormControl>        
        </Flex>
        </Center>
    </>
  )
}

export default contact