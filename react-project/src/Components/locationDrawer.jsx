import {Input,Image,Text,Drawer, Button, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody} from "@chakra-ui/react";
import React from "react";
import {useContext} from "react"
import {context} from "../Context/AuthContext"

function LocationDrawer({lbtnRef}){
    const {onClose,isOpen} = useContext(context)
     

    return(  
                 <>
                   <Drawer
                     size={"sm"}
                     isOpen={isOpen}
                     placement='right'
                     onClose={onClose}
                     finalFocusRef={lbtnRef}  
                 >
                     <DrawerOverlay />
                     <DrawerContent >
                     <DrawerCloseButton />
                     <DrawerHeader p={6} bg={"#10847E"}><Image w={190} src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png?dim=256x0"/></DrawerHeader>
                     <DrawerBody>
                     <Text p={"16px"}>jghdfdfdfghjfffgfhhggggggggggggg</Text>
                         <Input border={"2px solid silver"} placeholder='Enter your phone number' />
                         <Button w={"full"} borderRadius="2px" p={6} mt={15} bg={"#10847E"} color={"white"} >Send OTP</Button>
                         <Text fontSize={12} pt={4}>fgjhggggggggggggggggggggggggg</Text>
                     </DrawerBody>
                     </DrawerContent>
             </Drawer>
                 </>
                
    )
}
export default LocationDrawer