import { Box, Center, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { styles } from '../pages/_app';
import team1 from '../assests/team1.jpg'
import team2 from '../assests/team2.jpg'
import team3 from '../assests/team3.jpg'
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonialStyles = {
    testimonial_container: {
        alignItems: 'center',
        overflowX: 'scroll',
        width: '100%',
        scrollSnapType: 'inline mandatory',
        scrollBehavior:'smooth',
        scrollbarWidth: 'none', 
        '& > * ' :{
          scrollSnapAlign: 'start'
        },
       '&::-webkit-scrollbar ':{
           display: 'none'
       }
    },
    testimonialCard: {
        placeItems: 'center',
        textAlign: 'center',
    },
    quote: {
        fontSize:'60px',
        color:'#3a86ff'
    },
    sliderContainer: {
      mt:'7rem',  
      gap:'2rem',
      justifyContent:'center',
      alignItems:'center'
    },
    sliderButton: {
     width:'20px',
     height:'20px',
     borderRadius:'50%',
     background:'rgb(53, 53, 53)',      
    }
}

const testimonialData = [
    {
     img: team1,
     id:'team_1',
     heading:'Simply What I Call Travelling in Style',
     desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut reiciendis, eaque suscipit neque assumenda provident recusandae non quidem nesciunt iste aperiam, cumque alias perferendis!',
     jobTitle:'Web Developer',
     name:'Mikasa akerman'
    },
    {
     img: team2,
     id:'team_2',
     heading:'Just Awesome , Really Satisified With The Services',
     desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut reiciendis, eaque suscipit neque assumenda provident recusandae non quidem nesciunt iste aperiam, cumque alias perferendis!',
     jobTitle:'Web Designer',
     name:'Levi akerman'
    },
    {
     img: team3,
     id:'team_3',
     heading:'This Is Really Just Wonderful,Thanks Again',
     desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut reiciendis, eaque suscipit neque assumenda provident recusandae non quidem nesciunt iste aperiam, cumque alias perferendis!',
     jobTitle:'Product Manager',
     name:'Eren yeger'
    },
]



const Testimonial = () => {
  const [cardId, setCardId] = useState('team_1')
    const handleSliderId = (id) => {
        setCardId(id)
    }
    useEffect(() => {
     document.getElementById(`${cardId}`).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    }, [cardId])
  return (
    <>
     <Center py='5rem' flexDirection='column' style={styles.section_main}  >
    <Flex justifyContent='center' alignItems='center' textAlign='center' flexDirection='column' mb='3rem'>
        <Text sx={styles.subHeading}>TESTIMONIAL</Text>
        <Heading sx={styles.Heading}>What People Say About Us</Heading>
        </Flex>
        <Flex sx={testimonialStyles.testimonial_container}>
        {testimonialData.map(({desc,heading,img,jobTitle,name,id})=>(
            <Flex sx={testimonialStyles.testimonialCard} width='inherit' key={name} id={id}>
            <Grid sx={testimonialStyles.testimonialCard} gap='2rem' width='100vw' >
             <Box width='150px' height='150px' justifySelf='center'>
             <Image src={img} style={{borderRadius:'50%'}} />
             </Box>
            <Text as='span' sx={testimonialStyles.quote}><FaQuoteLeft/></Text> 
            <Heading sx={styles.Heading}>{heading}</Heading>
            <Text sx={styles.p} style={{whiteSpace:'normal',width:'60%',fontSize:'18px',margin:0}}>{desc}</Text>
            <Box>
            <Heading sx={styles.Heading} style={{fontSize:'25px'}}>{name}</Heading>
            <Text sx={styles.p} style={{fontSize:'20px',margin:0}} >{jobTitle}</Text>
            </Box>
            </Grid>
        </Flex>
        ))} 
     </Flex>
     <Flex sx={testimonialStyles.sliderContainer}>{testimonialData.map(({name,id})=>(<Box sx={testimonialStyles.sliderButton} key={name} onClick={()=>handleSliderId(id)} style={{background:`${cardId === id ? '#3a86ff':'' }`}}></Box>))}</Flex>
    </Center>
    </>
  )
}

export default Testimonial