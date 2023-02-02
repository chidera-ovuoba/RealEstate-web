import { Box, Flex,  Text,Image, Grid, Icon, GridItem } from '@chakra-ui/react';
import { MdOutlineHomeRepairService} from 'react-icons/md';
import { GiStarMedal,GiHouse } from 'react-icons/gi';
import { fetchApi, baseUrl } from '../../../utils/fetchApi';
import { MdCheckCircle } from 'react-icons/md';

const AgencyDetails = ({ agencyDetails,idnum }) => {
    const {logo:{url},agents,agentsCount,name,speciality_codes,stats:{adsSaleCount,adsRentCount,purposes,categoryTypes,serviceAreas}}  = agencyDetails[0]
    
        return (<Box maxWidth = '1000px' margin = 'auto' p = '6' >
            {url && <Image sx={{ width: '100vw', height: '35vh' }} src={url} paddingBottom='10px' objectFit='contain' alt='' />}
            <Text fontSize='5xl' fontWeight="black" textAlign='center' marginBottom='3'>{name}</Text>
            <Box w='full' p='6'>
                {agents.length > 0 && 
                    <>
                    <Text fontWeight='black' fontSize='2xl' marginTop='5' marginBottom='2'>Agents {agentsCount}</Text>
                <Grid gap={3} marginTop='2' templateRows={`repeat(${agents.length > 10 ? 10:agents.length},1fr)`} templateColumns={`repeat(${agents.length > 10 ? 3:''},1fr)`} mb='20px'>
                        {agents.map(({ name,i }) => (
                            <GridItem key={i}><Icon as={MdCheckCircle} color='green.500' />{name}</GridItem>
                        ))}
                    </Grid>
                </>
                }

                {speciality_codes &&
                    <>
                      <Text fontWeight='black'  fontSize='2xl' marginTop='5' marginBottom='2'>Specialities</Text> 
                     <Flex flexWrap='wrap'>
                        {speciality_codes.map((item) => (
                            <Flex key={item}
                                 gap='10px'
                                alignItems='center'
                                    fontWeight='bold'
                                    color='green.500'
                                    borderRadius='30'
                                    p='4'
                                    m='1'
                                    bg='green.100'
                            ><GiStarMedal />{item.replace('_', ' ')}</Flex>
                        ))
                        }
                            </Flex>
                        </>
                }
                 
                <Text fontWeight='black' fontSize='2xl' marginTop='5' marginBottom='2'>Stats</Text>
                <Flex flexWrap='wrap' justifyContent='space-between' textTransform='uppercase'  flexDirection='column'>
               {adsSaleCount > 0 && <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
                    <Text>Sales Count</Text>
                    <Text fontWeight='bold'>{adsSaleCount}</Text>
                    </Flex>}
                   {adsRentCount > 0 && <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
                    <Text>Rent Count</Text>
                    <Text fontWeight='bold'>{adsRentCount}</Text>
                </Flex>}
               {purposes && <Flex justifyContent='space-between' w='400px' p='3' >
                        <Text>Purpose</Text>
                        <Box sx={{display:'flex',gap:'1rem'}}>
                        {purposes.map((item,i) => (
                            <Text key={i} fontWeight='bold'>{item}</Text>  
                        ))
                        }
                    </Box>
                    </Flex>}
                    </Flex>
                {categoryTypes.length && <>
                     <Text fontWeight='black'  fontSize='2xl' marginTop='5' marginBottom='2'>Categories</Text>
                <Flex flexWrap='wrap' >
                    {
                        categoryTypes.map((item) => (
                                <Flex key={item}
                                gap='10px'
                                alignItems='center'
                                    fontWeight='bold'
                                    color='green.500'
                                    borderRadius='30'
                                    p='4'
                                    m='1'
                                    bg='green.100'
                            ><GiHouse />{' '}{item}</Flex>
                        ))
                }
                    </Flex>
                    </>
                }
                {serviceAreas.length && <> 
                  <Text fontWeight='black'  fontSize='2xl' marginTop='5' marginBottom='2'>ServiceAreas</Text>
                <Flex flexWrap='wrap' >
                    {
                        serviceAreas.map((item) => (
                                <Flex key={item}
                              gap='10px'
                                alignItems='center'
                                    fontWeight='bold'
                                    color='green.500'
                                    borderRadius='30'
                                    p='4'
                                    m='1'
                                    bg='green.100'
                            ><MdOutlineHomeRepairService />{' '}{item}</Flex>
                        ))
                }
                </Flex>
                    </>
                }
                    </Box> 
     
        </Box>)
};

export default AgencyDetails;

export async function getServerSideProps({ params: { name } }) {
    const agencyDetails = await fetchApi(`${baseUrl}/agencies/list?query=${name}`);

    return {
        props: {
            agencyDetails: agencyDetails?.hits,
        }
    }
}