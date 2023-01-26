import { Flex, Box, Text, Button, Heading, Center } from '@chakra-ui/react';
import Image from 'next/image';
import ServiceCard from '../components/ServiceCard';
import { styles } from '../pages/_app';

const serviceData = ['Design', 'Strategy', 'Marketing', 'Results'];

const Services = () => {
  return (
      <>
          <Center sx={styles.section_main} flexDirection='column'>
              <Flex justifyContent='center' alignItems='center' textAlign='center' flexDirection='column'>
                  <Text sx={styles.subHeading}>OUR SERVICES</Text>
                   <Heading sx={styles.Heading}>We Provide Great Services</Heading>
              </Flex>
              <Flex flexWrap='wrap' justifyContent='center' alignItems='center' gap='2rem' mt='2rem'>
                  {
                      serviceData.map((item) => < ServiceCard item={item} />)
                  }
              </Flex>
          </Center>
      </>
  )
}

export default Services