import { Container,Text,Input, Image, Box} from "@chakra-ui/react"
import Navbar from "../Components/Navbar";
import Carousell from "../Components/Carausel";
import CatCrausel from "../Components/CatogeryCrausel";
import {data} from "../Components/Data"
import NewLaunchCrausel from "../Components/NewLaunchCrausel";
import TrendingCrausel from "../Components/TrendingCrausel";


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
              
             <Container ml={10}  maxW={"full"}>
                <Text mb={10} fontWeight={"semibold"} fontSize={25}>Offers Just for You</Text>
                <Box display={"flex"} gap={8}>
                <Box borderRadius={5} _hover={{boxShadow:"lg",rounded:'lg'}} p={3} border={"1px solid silver"} w={300} display={"flex"}>
                 <Image mr={5} w={50} src="https://cms-contents.pharmeasy.in/offer/028f38c99b9-PELOGO.jpg?dim=1440x0"></Image>
                 <Text>Flat 75% off on first 3 medicine orders.</Text>
               </Box>
               <Box borderRadius={5} _hover={{boxShadow:"lg",rounded:'lg'}} p={3} border={"1px solid silver"} w={300} display={"flex"}>
                 <Image mr={5} w={50} src="https://cms-contents.pharmeasy.in/offer/028f38c99b9-PELOGO.jpg?dim=1440x0"></Image>
                 <Text>Flat 75% off on first 3 medicine orders.</Text>
               </Box>
               <Box borderRadius={5} _hover={{boxShadow:"lg",rounded:'lg'}} justifyContent={"center"} alignItems={"center"} display="flex" p={3} border={"1px solid silver"} w={300}>
                 <Text>Login to view more offers</Text>
               </Box>
                </Box>
             </Container>
             <Container ml={10} maxW={"full"}>
             <Text mt={10} fontWeight={"semibold"} fontSize={25}>Shop by Categories</Text>
             </Container>
             <Container maxW={"full"}>
             <CatCrausel/>
             </Container>
             
             <Container ml={10}  maxW={"full"}>
                <Text pb={-10} fontWeight={"semibold"} fontSize={25}>New Launches</Text>
                <Text   >New wellness range just for you!</Text>
             </Container>
             <Container   maxW={"full"}>
                 <NewLaunchCrausel/>
             </Container>
             <Container ml={10}  maxW={"full"}>
                <Text pb={-10} fontWeight={"semibold"} fontSize={25}>Trending Near You</Text>
                <Text>Popular in your city</Text>
             </Container>
             <Container   maxW={"full"}>
                <TrendingCrausel/>
             </Container>
   </>


}

export default Home