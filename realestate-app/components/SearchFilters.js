import { useEffect, useState } from "react";
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from "next/router";
import { MdCancel } from 'react-icons/md';
import Image from "next/image";
import { filterData,getFilterValues } from "../../utils/filterData";
const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData);
    const router = useRouter();
 
    const searchProperties = (filterValue) => {
        const path = router.pathname;
        const { query } = router;
    
        const values = getFilterValues(filterValue);
        const name =Object.keys(filterValue)[0];
        values.map((item) => {
            if(item.name === name )
            query[item.name] = item.value;
        })
        // console.log();
        router.push({ pathname: path, query });
    }

    return (
        <Flex p='4' bg='gray.100' justifyContent='center' flexWrap='wrap'>
            {
                filters.map((filter) => (
                    <Box key={filter.queryName}>
                        <Select
                            placeholder={filter.placeholder}
                            w='fit-content'
                            p='3'
                            onChange ={(e)=> searchProperties({[filter.queryName]: e.target.value})}
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
        </Flex>
    )
}
export default SearchFilters;