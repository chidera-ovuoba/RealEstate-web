import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon
                fontSize='2xl'
                cursor='pointer'
                onClick={()=>scrollPrev()}
                as={FaArrowAltCircleLeft}
            />
        </Flex>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon
                fontSize='2xl'
                cursor='pointer'
                onClick={()=>scrollNext()}
                as={FaArrowAltCircleRight}
            />
        </Flex>
    )
}

const ImageScrollbar = ({data}) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow:'hidden'}} >
        {
            data.map((item) => (
                <Box key={item.id} width='910px' itemID={item.id} overflow='hidden' p='1'>
                    <Image
                        placeholder='blur'
                        blurDataURL={item.url}
                        src={item.url}
                        alt='image_building'
                        width={1000}
                        height={500}
                        sizes='(max-width:500px) 100px , (max-width:1023px) 400px,1000px'
                    />

                </Box>
            ))
    }
    </ScrollMenu>
)
export default ImageScrollbar;