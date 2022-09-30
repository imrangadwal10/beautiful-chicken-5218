import Carousel from 'react-elastic-carousel';
import {Container,Text,Box,Image} from "@chakra-ui/react"

function CatCrausel(){


    return (
        <>
        <Carousel itemPadding={[10, 10]} itemsToShow={8}>
               
               <Box _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
                <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png?dim=256x0"/>
                <Text>Covid essentials</Text>
              </Box>
              <Box _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
                <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9f446c0e74273d70b0baf85e4ff0f76a.png?f=png?dim=256x0"/>
                <Text>Personal care</Text>
              </Box>
              <Box _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
                <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/aace6d1f0dc03f1f8c6e26dd880e1934.png?f=png?dim=256x0"/>
                <Text>Health food and drinks</Text>
             
              </Box>
              <Box _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
                <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/3c7ab4d29c6631f7a5cb7eafd3bfbc79.png?f=png?dim=256x0"/>
                <Text>Beauty</Text>
              </Box>


              <Box _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
                <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9b3ad6971475304e9e1614ac30d4545a.png?f=png?dim=256x0"/>
                <Text>Skin care</Text>
              </Box>
              <Box _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
                <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=256x0"/>
                <Text>Home care</Text>
              </Box>
              <Box _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
                <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png?dim=256x0"/>
                <Text>Ayurvedic care</Text>
              </Box>
              <Box _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
                <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f970ef9868093acb9d1d37a9387912f9.png?f=png?dim=256x0"/>
                <Text>Sexual wellness</Text>
              </Box>
              <Box _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
                <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cf0c849550a38109738815b3fc2fac6.png?f=png?dim=256x0"/>
                <Text>Fitness Supliments</Text>
              </Box>
              <Box _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
                <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/efdbfba5bfbb3b809728b627e7dfa118.png?f=png?dim=256x0"/>
                <Text>Mother and baby care</Text>
              </Box>
              <Box _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
                <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ac80578390a23bcfb1ed5a4551886ea7.png?f=png?dim=256x0"/>
                <Text>Healthcare devices</Text>
              </Box>
              <Box _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
                <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/c4582ea6bbf834f08b29d4dc0e84a0e3.png?f=png?dim=256x0"/>
                <Text>Health condition</Text>

              </Box>
              <Box _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
                <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1e5520125d1538b8bc2a321b8033a98b.png?f=png?dim=256x0"/>
                <Text>Diabetic care</Text>
              </Box>
              <Box _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"} w={150} p="13px">
                <Image src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/7cc6e48943b635ba9f4e5a3b0c4810cd.png?f=png?dim=256x0"/>
                <Text>Elder care</Text>
              </Box>
       </Carousel>
     </>
    )
}
export default CatCrausel
