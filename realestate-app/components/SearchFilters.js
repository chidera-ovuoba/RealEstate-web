import { useEffect, useState } from "react";
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button, Center } from '@chakra-ui/react';
import { useRouter } from "next/router";
import { MdCancel } from 'react-icons/md';
import Image from "next/image";
import { filterData,getFilterValues } from "../../utils/filterData";
import { styles } from "../pages/_app";
import { FcSearch } from "react-icons/fc";
const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData);
    const [filteredData, setFilteredData] = useState({});
    const router = useRouter();
 
    const searchProperties = (filterValue) => {
        const path = router.pathname;
        const { query } = router;
    
        const values = getFilterValues(filterValue);
        const keys =Object.keys(filterValue);
        values.reduce((acc,item) => {
            if(keys.find((key)=>key ===item.name) )
            query[item.name] = item.value;
            return acc
        },{})
        router.push({ pathname: path, query });
    }

    return (
        <>
        <Flex p='4' sx={styles.section_main} justifyContent='center' flexWrap='wrap' gap='2rem'>
            {
                filters.map((filter) => (
                    <Box key={filter.queryName}>
                        <Select
                            placeholder={filter.placeholder}
                            w='fit-content'
                            borderColor='#000'
                            onChange ={(e)=> setFilteredData((prev)=>({...prev,[filter.queryName]: e.target.value}))}
                        >
                            {
                                filter?.items?.map((item) => (
                                    <option value={item.value} key={item.value}>{item.name}</option>
                                ))
                            }
                                
                        
                        </Select>
                    </Box>
                ))
        }
        <Center sx={{width:'100%'}}><Center as="span" sx={{width:'80px',height:'80px',borderRadius:'50%',background:'#fff',fontSize:'50px','&:hover':{transform:'scale(0.9)',boxShadow:'0px 0px 10px 1px rgba(0,0,0,0.19)',cursor:'pointer',transition:'all 0.5s ease-in-out'}}} onClick={()=>searchProperties(filteredData)} ><FcSearch/></Center></Center>
        </Flex>
        </>
    )
}
export default SearchFilters;