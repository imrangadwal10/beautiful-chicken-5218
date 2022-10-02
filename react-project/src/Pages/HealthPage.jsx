import {Flex,Box,Input,Image,Text, Icon,} from "@chakra-ui/react"
import {AiOutlineSearch} from "react-icons/ai";
import Carousel1 from "../Components/HealthPageComponents/Crausel1";
import {discountData,brandsData,shopByCatetoryImgData} from "../Components/HealthPageComponents/HealthImgData";
import TrendingDealsCrausel from "../Components/HealthPageComponents/TrendingDealsCrausel";
import PaymentCrausel from "../Components/PaymentCrausel";
import Footer from "../Components/Footer";

function Health(){
          
   return <>
           
     <Flex position={"relative"} alignItems='center' gap='2' bg={"teal"} pb={50}>
  <Box display={"flex"} gap={10} mt={5}>
  <Box p='2'>
    <Image mt={-1} ml={20} w={160} src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" ></Image>
  </Box>
  <Box>
  <Input p={6} w={900} bg={"white"}  placeholder='Select Pincode | Search medicines/Health products' size='md' /><Icon ml={-1}  borderRightRadius={5} position={"absolute"} bg={"lightblue"} h={50} w={10} as={AiOutlineSearch}/>
  </Box>
  </Box>
 
</Flex>
    <Box left={300} top={89} position={"absolute"} bg={"teal"} color={"white"} display={"flex"}>
    <Box gap={5} display={"flex"}>
        <Text>Order Medicines</Text>
        <Text>Healthcare Products</Text>
        <Text>Lab Test</Text>
        <Text>RTPCR</Text>
    </Box>
 
 <Box ml={430} gap={5} display={"flex"}>
        <Text>Offers</Text>
        <Text>Login/Signup</Text>
        <Text>Cart</Text>
 </Box>
</Box>
 <Box>
  <Text p={10} fontWeight={"bold"} fontSize={20}>Daily Dose of Wellness</Text>
 <Carousel1/>
 </Box>
    <Box>
        <Text ml={10} p={10} fontWeight={"bold"} fontSize={20}>Your Discount Station</Text>
        <Box m={"auto"} w={"90%"} display={"flex"} gap={10}>
        {
            discountData.map((el)=>{
                 return  <Box  key={el.src}>
                     <Image _hover={{transform: "scale(1.1)"}} src={el.img}></Image>
                 </Box>
                     
            })
        }
        </Box>
    </Box>
    <Box >
        <Text ml={10} p={10} fontWeight={"bold"} fontSize={20}>Brands in Focus</Text>
        <Box gridTemplateColumns={"repeat(6,1fr)"} m={"auto"} w={"90%"} display={"grid"} gap={10}>
        {
            brandsData.map((el)=>{
                 return  <Box  key={el.src}>
                     <Image _hover={{transform: "scale(1.1)"}} src={el.img}></Image>
                 </Box>
                     
            })
        }
        </Box>
    </Box>
    <Box margin={"auto"} w={"90%"}>
        <Image mt={10} w={"100%"} src="https://cdn01.pharmeasy.in/dam/banner/banner/ca34963ca27-7.jpg"/>
    </Box>
    <Box>
  <Text p={10} fontWeight={"bold"} fontSize={20}>Trending Deals for You</Text>
 <TrendingDealsCrausel/>
 </Box>
   <Box>
        <Text ml={10} p={10} fontWeight={"bold"} fontSize={20}>Shop By Category</Text>
        <Box m={"auto"} w={"90%"} display={"flex"} gap={10}>
        {
            shopByCatetoryImgData.map((el)=>{
                 return  <Box  key={el.src}>
                     <Image _hover={{transform: "scale(1.1)"}} src={el.img}></Image>
                 </Box>
                     
            })
        }
        </Box>
    </Box>
    <Box>
  <Text ml={10} p={10} fontWeight={"bold"} fontSize={20}>Payment Offers</Text>
  <PaymentCrausel/>
 </Box>
 <Box >
    <Text ml={10} p={10} fontWeight={"bold"} fontSize={20}>Mega Clearance Store</Text>
    <Image margin={"auto"} w={"90%"} src="https://cdn01.pharmeasy.in/dam/banner/banner/7a6bb5baea0-Clearance.jpg"></Image>
 </Box>
 <Footer/>
</>
}
export default Health;