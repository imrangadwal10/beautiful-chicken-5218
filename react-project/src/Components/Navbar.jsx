import {Flex,Image,Spacer,Text,Box, Container, Icon, Button} from "@chakra-ui/react";
import {AiOutlineShoppingCart,AiOutlineDown} from "react-icons/ai"
import { BiMobileAlt } from "react-icons/bi";
import {BsPerson} from "react-icons/bs";
import React from "react";
import DrawerComp from "./Drawer";
import {useContext} from "react"
import {context} from "../Context/AuthContext"
// import LocationDrawer from "./locationDrawer";

function Navbar(){
  const btnRef = React.useRef()
  const lbtnRef = React.useRef()
  const {onOpen} = useContext(context)


  return <Container bg={"white"} borderBottom={"1px solid silver"} maxW={"full"} zIndex={1} top={0} position={"sticky"} >
            <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box _hover={{"cursor":"pointer"}} p='2' pr={"25px"} >
    <Image  p={"1px"} pl="70" pr="10" borderRight="1px solid silver" src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0"></Image>  
  </Box>
    <Box ref={lbtnRef} onClick={onOpen}  _hover={{"cursor":"pointer"}}>
        <Text fontSize={13}>Delivery to</Text>
        <Text fontSize={15} fontWeight={"semibold"}>Select Pincode <Icon mb={-1} as={AiOutlineDown}/></Text>
     </Box>
           
  <Spacer />
  <Box gap='2'>
    <Box _hover={{"cursor":"pointer"}} display={"flex"} alignItems="center" justifyContent={"center"}>
    <Button mt={1} mr={45}><Icon w={6} h={6} as={BiMobileAlt}/>Download App</Button>
    <Icon w={6} h={6} mr={3} as={BsPerson}/>
    <Text ref={btnRef} onClick={onOpen} pr={6}>Hello,Log in</Text>
           
            <Image h={5} w={5}  src="https://cdn-icons-png.flaticon.com/128/879/879757.png"/>
            <Text pl={2}  pr={10}> offers</Text>
            <Icon pr={3} w={8} h={8} as={AiOutlineShoppingCart}/>
            <Text   pr={20}> Cart</Text>
     </Box>        
  </Box>
</Flex>

   <>
         <DrawerComp/>
   </>

 
  
  </Container>
}

export default Navbar;