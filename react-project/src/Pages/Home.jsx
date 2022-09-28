import { Container,Text,Input, Image, Box, Icon } from "@chakra-ui/react"
import Navbar from "../Components/Navbar";
import Carousell from "../Components/Carausel";
import {data} from "../Components/Data"



function Home(){
      return   <>
            <Navbar/>
            <Container  pt={5} display={"flex"} justifyContent={"center"} alignItems="center" maxW={"full"}>
             <Text fontWeight={"semibold"} fontSize={25}>What are you looking for?</Text><br/> 
            </Container>
             <Box borderRadius={50} margin={"auto"} display={"flex"} justifyContent={"center"} alignItems={"center"} borderRight={"5%"}>
                  <Input p={23} borderRadius={50} maxW={850} placeholder='Search ' size='md'/>   
                  <Box  _hover={{"cursor":"pointer"}} ml={-24} borderRadius={50} p={2} pl={5} pr={5} color={"white"} bg={"teal"}>Search</Box>
             </Box>
            <Container mb={10} mt={10} justifyContent={"space-between"} display={"flex"} maxW={"1300px"}>
               {
                data.map((el)=>{
                     return <Box  key={el.name} _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
                     <Image src={el.img}/>
                     <Text>{el.name}</Text>
                     <Text fontSize={12} color={"RED"}>{el.off}</Text>
                   </Box>
                })
               }
             
            </Container>
            <Container maxW={"full"}>
            <Carousell/>
            </Container>
   
           </>

}

export default Home