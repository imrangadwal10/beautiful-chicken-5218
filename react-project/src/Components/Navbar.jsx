import {
  Hide,
  Flex,
  Image,
  Spacer,
  Text,
  Box,
  Container,
  Icon,
  Button,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart, AiOutlineDown } from "react-icons/ai";
import { BiMobileAlt } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import React from "react";
import DrawerComp from "./Drawer";
import { useContext } from "react";
import { context } from "../Context/AuthContext";
import PincodeDrawer from "./pincodeDrawer/pincodedrawer";
function Navbar() {
  const btnRef = React.useRef();
  const { onOpen } = useContext(context);

  return (
    <Container
      bg={"white"}
      borderBottom={"1px solid silver"}
      maxW={{ base: "full", md: "100%", lg: "full" }}
      zIndex={1}
      top={0}
      position={"sticky"}
    >
      <Flex
        maxW={{ base: "full", md: "100%", lg: "full" }}
        alignItems="center"
        gap="2"
      >
        <Box _hover={{ cursor: "pointer" }} p="2" pr={"25px"}>
          <Image
            p={"1px"}
            pl="70"
            pr="10"
            borderRight="1px solid silver"
            src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0"
          ></Image>
        </Box>

        <>
          <Hide below="md">
            <Box display={"flex"} _hover={{ cursor: "pointer" }}>
                <PincodeDrawer/>
         <Icon mt={"12px"} mb={-1} as={AiOutlineDown}/>

            </Box>
          </Hide>
        </>

        <Spacer />
        <Box gap="2">
          <Box
            _hover={{ cursor: "pointer" }}
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
          >
            <>
              <Hide below="md">
                <Button mt={1} mr={45}>
                  <Icon w={6} h={6} as={BiMobileAlt} />
                  Download App
                </Button>
                <Icon w={6} h={6} mr={3} as={BsPerson} />
                <Text
                  _hidden={{ md: "hidden" }}
                  ref={btnRef}
                  onClick={onOpen}
                  pr={6}
                >
                  Hello,Log in
                </Text>
              </Hide>
            </>
            <Image
              h={5}
              w={5}
              src="https://cdn-icons-png.flaticon.com/128/879/879757.png"
            />
            <Text pl={2} pr={10}>
              {" "}
              offers
            </Text>
            <Icon pr={3} w={8} h={8} as={AiOutlineShoppingCart} />
            <Text pr={20}> Cart</Text>
          </Box>
        </Box>
      </Flex>

      <>
        <DrawerComp />
      </>
    </Container>
  );
}

export default Navbar;
