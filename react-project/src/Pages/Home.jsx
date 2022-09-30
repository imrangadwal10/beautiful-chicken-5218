import { Container,Text,Input, Image, Box, Icon } from "@chakra-ui/react"
import Navbar from "../Components/Navbar";
import Carousell from "../Components/Carausel";
import CatCrausel from "../Components/CatogeryCrausel";
import {data,LabTestData,ConcernData,BannerImgs,WhyChooseusData} from "../Components/Data"
import NewLaunchCrausel from "../Components/NewLaunchCrausel";
import TrendingCrausel from "../Components/TrendingCrausel";
import LabImgCrausel from "../Components/LabImgCrausel";
import PaymentCrausel from "../Components/PaymentCrausel";
import BrandsCrausel from "../Components/BrandsCrausel"
import ImageCrausel from "../Components/ImageCrausel";
import HealthArticlesCrausel from "../Components/HealthArticleCrausel";
import CustomerSayCrausel from "../Components/CustomerSayCrousel";
import TextComp from "../Components/TextComp";
import Footer from "../Components/Footer";

function Home(){
  
      return   <Box maxW={{base:"100%",md:"100%",lg:"full"}}>
            <Navbar/>
            <Container  pt={5} display={"flex"} justifyContent={"center"} alignItems="center" maxW={"full"}>
             <Text fontWeight={"semibold"} fontSize={25}>What are you looking for?</Text><br/> 
            </Container>
             <Box borderRadius={50} margin={"auto"} display={"flex"} justifyContent={"center"} alignItems={"center"} borderRight={"5%"}>
                  <Input p={23} borderRadius={50} maxW={850} placeholder='Search ' size='md'/>   
                  <Box  _hover={{"cursor":"pointer"}} ml={-24} borderRadius={50} p={2} pl={5} pr={5} color={"white"} bg={"teal"}>Search</Box>
             </Box>
            <Container mb={10} mt={10}  justifyContent={"space-between"} display={"flex"} maxW={{base:"full",md:"100%",lg:"full"}}>
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
            <Container  maxW={{base:"100%",md:"100%",lg:"full"}}>
            <Carousell/>
            </Container>
              
             <Container ml={10}  maxW={{base:"full",md:"100%",lg:"full"}}>
                <Text mb={10} fontWeight={"semibold"} fontSize={25}>Offers Just for You</Text>
                <Box display={"flex"} gap={8}>
                <Box borderRadius={5}  _hover={{boxShadow:"lg",rounded:'lg'}} p={3} border={"1px solid silver"} w={{sm:"450px",md:"450px",lg:"300px"}} display={"flex"}>
                 <Image mr={5}  w={{sm:"80px",md:"100px",lg:"50px"}} src="https://cms-contents.pharmeasy.in/offer/028f38c99b9-PELOGO.jpg?dim=1440x0"></Image>
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






             <Container maxW={"95%"} bg={"#EFF1F9"}>
             <Text  p={10} pb={-0} fontWeight={"semibold"} fontSize={25}>Lab Tests by Health Concern</Text>
                <Box mt={-10} p={10} display={"flex" } gap={2}>
                <Text>Powered by </Text>
                <Image w={100} src="https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1440x0"></Image>
                </Box>
       <Box  justifyContent={"space-around"} display={"flex"}>
                    {
                     LabTestData.map((el)=>{
                        return  <Box key={el.description} gap={"3"} justifyContent={"center"} alignItems={"center"} display={"flex"} w={180}>
                              <Icon w={6} h={6} as={el.icon}/>
                              <Text>{el.description}</Text>
                           
                     </Box>
                     })
                        
                    }
                        
         </Box>    
              
             </Container>
             <Container maxW={"95%"} bg={"#EFF1F9"}>
                 <LabImgCrausel/>  
               </Container> 
               <Container mt={10} ml={10}  maxW={"full"}>
                <Text pb={-10} fontWeight={"semibold"} fontSize={25}>Shop by Concern</Text>
                <Text>Products are handpicked by experts</Text>
             </Container>  
             <Container mt={10}  ml={10}  maxW={"full"}>
               <Box display={"flex"}  gap={10}>  
               {
                  ConcernData.map((el)=>{
                       return <Box w={100} textAlign={"center"}>
                                   <Image src={el.img}/>
                                   <Text>{el.name}</Text>
                              </Box>
                  })
                }
                
               </Box>
             </Container>
             <Container maxW={"95%"}>
               <Text mt={10} fontWeight={"semibold"} fontSize={25}>Payment Offers</Text>
             </Container>
             <Container maxW={"95%"}>
             <PaymentCrausel/>
             </Container>
             <Container mt={10} ml={10}  maxW={"full"}>
                <Text pb={-10} fontWeight={"semibold"} fontSize={25}>Featured Brands</Text>
                <Text>Pick from our favourite brands</Text>
             </Container>
               <Container maxW={"95%"}>
               <BrandsCrausel/>
               </Container>
               <Container mt={10} display={"flex"} gap={10} maxW={"90%"}>
               {
                  BannerImgs.map((el)=>{
                     return <Box >
                         <Image w={260}  src={el.img}></Image>
                     </Box>
                  })
               }
               </Container>
               <Container mt={20} maxW={"95%"}>
               <ImageCrausel/>
               </Container>
               <Container mt={10} ml={10}  maxW={"full"}>
                <Text pb={-10} fontWeight={"semibold"} fontSize={25}>Health Articles</Text>
                <Text>Get up-to-date on our latest health updates</Text>
             </Container>
                <Container maxW={"95%"}>
                  <HealthArticlesCrausel/>
                </Container>
                <Container bg={"#EFF1F9"} maxW={"95%"}>
                <Text p={10} fontWeight={"semibold"} fontSize={25}>Why Choose Us?</Text>
                </Container>
                <Container justifyContent={"space-between"} alignItems={"center"} maxW={"95%"} display={"flex"} bg={"#EFF1F9"}>
                   {
                     WhyChooseusData.map((el)=>{
                         return <Box pb={20} display={"flex"} w={300}>
                                 <Image w={100} src={el.img}></Image>
                                  <Box >
                                    <Text fontSize={25}>{el.text1}</Text>
                                    <Text>{el.text2}</Text>
                                  </Box>
                         </Box>
                     }) 
                   }
                </Container>
                <Container maxW={"95%"}>
                <Text p={10} fontWeight={"semibold"} fontSize={25}>What Our Customers have to Say</Text>
                </Container>

              <Container maxW={"95%"}>
                 <CustomerSayCrausel/>
              </Container>
              <Container maxW={"full"}  h={400} w={"25%"} ml={629} mt={10} position={"absolute"}>
               <Text zIndex={1} position={"relative"} fontSize={40} fontWeight={"bold"}>Simplifying
                     Healthcare
                     Impacting Lives</Text>
                 <Text mt={5} zIndex={1} position={"relative"} fontSize={25} fontWeight={"semibold"}>Download the App for Free</Text>
                 <Box mt={10} gap={5} zIndex={1} position={"relative"} display={"flex"}>
                     <Image src="https://assets.pharmeasy.in/apothecary/images/googlePlay.svg?dim=256x0"/>
                     <Image src="https://assets.pharmeasy.in/apothecary/images/appStore.svg?dim=256x0"/>
                 </Box>
              </Container>
              <Image margin={"auto"} w={"95%"} h={380} bg={"#BFEDDD"} position={"relative"} src="https://assets.pharmeasy.in/apothecary/images/downloadBanner.webp?dim=1440x0&q=100"></Image>
              <TextComp/>
             <Footer/>
           </Box>
























}

export default Home