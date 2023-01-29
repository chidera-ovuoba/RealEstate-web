import Link  from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcContacts } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { MdOutlineRealEstateAgent } from 'react-icons/md';

const styles = {
    linearNav: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        fontSize: '20px',
        fontWeight: '600',
        '& a:hover':{
         color:'#3a86ff'
        },
        '@media (width < 700px)': {
            display:'none'
        }
    },
    menuNav: {
        display: 'none',
        '@media (width < 700px)': {
            display:'block'
        }
    }
}
const Navbar = () => (
    <Flex borderBottom='3px solid gray' borderColor='gray.100' py='30px'>
        <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
        <Link href='/'>EstateMongar</Link>
        </Box>
        <Spacer /> 
        <Flex sx={styles.linearNav}>
        <Link href='/'>
         Home
        </Link>
         <Link href='/search'>
          Search
        </Link>
         <Link href='/contact'>
         Contact
        </Link>
         <Link href='/agency'>
        Agencies
        </Link>
        </Flex>
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu fontSize='30px' />} variant='outlined' sx={styles.menuNav} />
                <MenuList>
                    <Link href='/' passHref>
                    <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    </Link>
                     <Link href='/search' passHref>
                    <MenuItem icon={<BsSearch/>}>Search</MenuItem>
                    </Link>
                     <Link href='/search?purpose=for-sale' passHref>
                    <MenuItem icon={<FcContacts/>}>Contact</MenuItem>
                    </Link>
                     <Link href='/agency' passHref>
                    <MenuItem icon={<MdOutlineRealEstateAgent />}>Agencies</MenuItem>
                    </Link>
                </MenuList>    
            </Menu>
        </Box>
    </Flex>
)
export default Navbar;