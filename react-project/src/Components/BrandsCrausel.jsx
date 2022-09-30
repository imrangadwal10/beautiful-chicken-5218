import Carousel from 'react-elastic-carousel';
import {Box,Text, Image} from "@chakra-ui/react";
import {brandsData} from "./Data"
function BrandsCrausel(){
    
   
    
         return   <Carousel itemPadding={[10, 10]}   itemsToShow={6.5}>
            {
                   brandsData.map((el)=>{
                      return <Box textAlign={"center"}>
                               <Image _hover={{boxShadow:"lg",rounded:'lg'}} src={el.img}></Image>
                               <Text>{el.name}</Text>
                      </Box>
                   })
               }  
 
           </Carousel>
        


}

    export default BrandsCrausel; 