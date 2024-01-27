import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>  
            <Flex bg='blue.400'>
                <Box p='4' bg='blue.600'>
                    <Link to="/">
                    Compu Mercado
                    </Link>
                </Box>
                <Spacer />
            
         <Menu>
            <MenuButton bg='blue.600'> 
                Categorias
            </MenuButton>
            <MenuList>
                <MenuItem>
                <Link to="/category/:categoryId">
                Categoria 1
                </Link>
                </MenuItem>
                <MenuItem>
                <Link to="/category/:categoryId">
                Categoria 2
                </Link>
                </MenuItem>
            </MenuList>
        </Menu>


        <Spacer />

                
                <Box p='4' bg='blue.600'>
                    <Link to="/category/categoryId">
                    <CartWidget/>
                    </Link>
                </Box>
            </Flex>

    </div>
  )
}

export default NavBar