import Carousel from 'react-elastic-carousel';
import {Container,Text,Box,Image} from "@chakra-ui/react"

function NewLaunchCrausel(){
  return  <Carousel itemPadding={[10, 10]} itemsToShow={6.5}>
               
    <Box  _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
     <Image margin={"auto"} h={150} w={70} src="https://cdn01.pharmeasy.in/dam/products_otc/Q79371/venusia-max-lotion-300-ml-2-1653112076.jpg?dim=1440x0"/>
     <Text>Venusia Nax Loation 300 Ml</Text>
     <Text fontSize={12}>MRP &#8377; 601.50</Text>
   </Box>
   <Box  _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
     <Image margin={"auto"} h={150} w={70} src="https://cdn01.pharmeasy.in/dam/products_otc/D90191/liveasy-wellness-pain-relief-spray-55gm-2-1659963248.jpg?dim=1440x0"/>
     <Text>Liveasy Wellness Pain Relief Spray 55gm</Text>
     <Text fontSize={12}>MRP &#8377; 199.00</Text>
   </Box>
   <Box _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
     <Image margin={"auto"} h={150} w={70} src="https://cdn01.pharmeasy.in/dam/products_otc/N48555/pharmeasy-vitamin-e-60-capsule-2-1659444130.jpg?dim=1440x0"/>
     <Text>Pharmeasy Vitamin E - Helps Reverse Ski..</Text>
     <Text fontSize={12}>MRP &#8377; 699.00</Text>
   </Box>
   <Box  _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
     <Image margin={"auto"} h={130} w={70} src="https://cdn01.pharmeasy.in/dam/products_otc/C86154/latex-medical-examination-hand-gloves-box-of-100-2-1641790026.jpg?dim=1440x0"/>
     <Text>Latex Medical Examination Hand...</Text>
     <Text fontSize={12}>MRP &#8377; 790.00</Text>
   </Box>
   <Box _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
     <Image margin={"auto"} h={130} w={70} src="https://cdn01.pharmeasy.in/dam/products_otc/P31053/kiwi-drinex-drain-cleaner-50g-pack-of-6-2-1645196552.jpg?dim=1440x0"/>
     <Text>Kiwi Drinex Drain Cleaner-50g (Pack...</Text>
     <Text fontSize={12}>MRP &#8377; 135.00</Text>
   </Box>
   <Box _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
     <Image margin={"auto"} h={120} w={70} src="https://cdn01.pharmeasy.in/dam/products_otc/H68051/godrej-hit-flies-mosquitoes-black-insect-killer-spray-400-ml-2-1641793715.jpg?dim=1440x0"/>
     <Text>Godrej Hit Flies and Mosquitoes Black...(Spray)-400 Ml
</Text>
     <Text fontSize={12}>MRP &#8377; 217.00</Text>
   </Box>
   <Box _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
     <Image margin={"auto"} h={120} w={70} src="https://cdn01.pharmeasy.in/dam/products_otc/D22681/mr-muscle-kitchen-cleaner-lemon-450-ml-2-1658222795.jpg?dim=1440x0"/>
     <Text>Mr Muscle Kitchen Cleaner Lemon 450 Ml</Text>
     <Text fontSize={12}>MRP &#8377; 130.00</Text>
   </Box> 
</Carousel>
}

export default NewLaunchCrausel