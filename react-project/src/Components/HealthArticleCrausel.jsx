import Carousel from 'react-elastic-carousel';
import {Box,Text, Image} from "@chakra-ui/react";
import {healthArticlesData} from "./Data"
function HealthArticlesCrausel(){
    console.log(healthArticlesData)
         return   <Carousel itemPadding={[10, 10]}   itemsToShow={5.5}>
            {
                 healthArticlesData.map((el)=>{
                      return <Box p={5} _hover={{boxShadow:"lg",rounded:'lg'}} textAlign={"center"}>
                               <Image src={el.img}></Image>
                               <Text>{el.text}</Text>
                      </Box>
                   })
               }  
 
           </Carousel>
        


}

    export default HealthArticlesCrausel; 