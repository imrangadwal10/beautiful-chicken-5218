import Carousel from 'react-elastic-carousel';
import {Container,Text,Box,Image} from "@chakra-ui/react";


function TrendingCrausel(){
    return  <Carousel itemPadding={[10, 10]} itemsToShow={6.5}>
       
    <Box   textAlign={"center"} >
     <Image h={180} w={300} p={30} _hover={{boxShadow:"lg",rounded:'lg'}}   src="https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1654168216.jpg?dim=700x0&dpr=1&q=100"/>
     <Text>Dr Morepen Gluco One Bg 03 Glucometer Te...</Text>
     <Text fontSize={12}>MRP &#8377; 849.00</Text>
   </Box>
   <Box   textAlign={"center"} >
     <Image h={180} w={300} p={30} _hover={{boxShadow:"lg",rounded:'lg'}}   src="https://cdn01.pharmeasy.in/dam/products_otc/Q83701/pharmeasy-all-in-one-vaporizer-1-1654233812.jpg?dim=1440x0"/>
     <Text>Pharmeasy All-In -One Vaporizer</Text>
     <Text fontSize={12}>MRP &#8377; 599.00</Text>
   </Box>
   <Box   textAlign={"center"} >
     <Image h={180} w={200} p={30} _hover={{boxShadow:"lg",rounded:'lg'}}   src="https://cdn01.pharmeasy.in/dam/products_otc/192351/i-pill-tab-1-1641398682.jpg?dim=1440x0"/>
     <Text>I Pill Tab</Text>
     <Text fontSize={12}>MRP &#8377; 110.00</Text>
   </Box>
   <Box   textAlign={"center"} >
     <Image h={180} w={300} p={30} _hover={{boxShadow:"lg",rounded:'lg'}}   src="https://cdn01.pharmeasy.in/dam/products_otc/A13457/tedibar-baby-soap-box-of-75-g-x-2-2-1640417614.jpg?dim=1024x0"/>
     <Text>Tedibar Baby Soap Box Of 75 G X 2</Text>
     <Text fontSize={12}>MRP &#8377; 310.00</Text>
   </Box>
   <Box   textAlign={"center"} >
     <Image h={180} w={300} p={30} _hover={{boxShadow:"lg",rounded:'lg'}}   src="https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1654234653.jpg?dim=1024x0"/>
     <Text>Everherb Karela Jamun Juice - Helps...</Text>
     <Text fontSize={12}>MRP &#8377; 207.48</Text>
   </Box>
   <Box   textAlign={"center"} >
     <Image h={180} w={300} p={30} _hover={{boxShadow:"lg",rounded:'lg'}}   src="https://cdn01.pharmeasy.in/dam/products_otc/000665/accu-chek-active-glucometer-test-strips-box-of-50-1-1654077435.jpg?dim=1440x0"/>
     <Text>Accu-chek Active Glucometer Test...</Text>
     <Text fontSize={12}>MRP &#8377; 799</Text>
   </Box>
   <Box   textAlign={"center"} >
     <Image h={180} w={150} p={30} _hover={{boxShadow:"lg",rounded:'lg'}}   src="https://cdn01.pharmeasy.in/dam/products_otc/F22476/liveasy-wellness-ironfolic-acid-with-zinc-vitamin-cb12-maintains-overall-health-bottle-of-60-2-1641794058.jpg?dim=1440x0"/>
     <Text>Liveasy Wellness Iron+folic Acid With...</Text>
     <Text fontSize={12}>MRP &#8377; 599.00</Text>
   </Box>
   <Box   textAlign={"center"} >
     <Image h={180} w={300} p={30} _hover={{boxShadow:"lg",rounded:'lg'}}   src="https://cdn01.pharmeasy.in/dam/products_otc/177755/unwanted-72-strip-of-1-tablet-2-1641787823.jpg?dim=1440x0"/>
     <Text>Unwanted 72 Strip Of 1 Tablet</Text>
     <Text fontSize={12}>MRP &#8377; 100.00</Text>
   </Box>
   
 
</Carousel>
}

export default TrendingCrausel;