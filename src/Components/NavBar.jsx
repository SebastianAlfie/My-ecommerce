import React from "react";
import {
  Button,
  Flex,
  Spacer,
  Box,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import logo from "../assets/Roparopa.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <Flex maxW="150rem" alignItems="center" gap="2" pt="1">
          <Link to={"/"}>
            <Box display="flex" ml="20">
              <img id="Ropa" src={logo} />
            </Box>
          </Link>
          <Spacer />
          <div className="botones_navbar">
            <Flex>
              <ButtonGroup className="botones" gap="7" justify="center">
                <Button colorScheme="teal" variant="link">
                  <Link to={"/catalogue"}>Catálogo</Link>
                </Button>
                <Menu className="menu_nav">
                  <MenuButton
                    bg="light"
                    as={Button}
                    colorScheme="light"
                    rightIcon={<ChevronDownIcon />}
                  >
                    Remeras
                  </MenuButton>
                  <MenuList bg="#383838">
                    <Flex>
                      <Link to={`/category/${"Camisetas"}`}>
                        <MenuItem bg="ligth">
                          Camiseta
                        </MenuItem>
                      </Link>
                    </Flex>
                    <Flex>
                    <Link to={`/category/${"Abrigos"}`}>
                      <MenuItem bg="ligth">
                        Abrigos
                      </MenuItem>
                    </Link>  
                    </Flex>
                    <Flex>
                    <Link to={`/category/${"Camisas"}`}>
                      <MenuItem bg="ligth">
                        Camisas
                      </MenuItem>
                    </Link>  
                    </Flex>
                  </MenuList>
                </Menu>
                <Menu className="menu_nav">
                  <MenuButton
                    bg="light"
                    as={Button}
                    colorScheme="light"
                    rightIcon={<ChevronDownIcon />}
                  >
                    Pantalones
                  </MenuButton>
                  <MenuList bg="#383838">
                    <MenuItem bg="ligth">Jeans</MenuItem>
                    <Link to={`/category/${"Pantalones"}`}>
                      <MenuItem bg="ligth">pantalones</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
                <Menu className="menu_nav">
                  <MenuButton
                    bg="light"
                    as={Button}
                    colorScheme="light"
                    rightIcon={<ChevronDownIcon />}
                  >
                    Medias
                  </MenuButton>
                  <MenuList bg="#383838">
                  <Link to={`/category/${"Medias"}`}>
                    <MenuItem bg="ligth">Medias</MenuItem>
                    </Link>
                    <MenuItem bg="ligth">Soquetes</MenuItem>
                  </MenuList>
                </Menu>
                <Link to={"/contact"}>
                <Button colorScheme="teal" variant="outline">
                  Contacto
                </Button>
                </Link>
              </ButtonGroup>
            </Flex>
          </div>
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </Flex>
      </div>
    </>
  );
};

export default NavBar;
