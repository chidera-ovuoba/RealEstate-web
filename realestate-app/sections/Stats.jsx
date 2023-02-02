import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { styles } from '../pages/_app'

const StatsData = [
    {
        value: '305',
        category: 'Total Properties'
    },
    {
        value: '212',
        category: 'Trusted Agencies'
    },
    {
        value: '101',
        category: 'Happy Buyers'
    },
    {
        value: '287',
        category: 'Total Agents'
    }
];

const statsStyle = {
    grid: {
        gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
        py:'5rem',
        placeItems:'center'
    }
}

const Stats = () => {
  return (
      <>
          <Grid  gap='1rem' style={styles.section_main} sx={statsStyle.grid}>
           {
            StatsData.map(({value,category}) => (
                <Box textAlign='center' key={category}>
                <Heading sx={styles.Heading}>{value}+</Heading>
                <Text sx={styles.p}>{category}</Text>
                </Box>
            ))
           }
          </Grid>
      </>
  )
}

export default Stats