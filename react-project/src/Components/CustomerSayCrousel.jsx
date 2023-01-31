import Carousel from 'react-elastic-carousel';
import {Box, Text} from "@chakra-ui/react";
import {customerSayData} from "./Data"
function CustomerSayCrausel(){
    
        return (
            <>
            <Carousel itemPadding={[20, 20]} itemsToShow={3}>
                  {
                    customerSayData.map((el)=>{
                        return <Box key={el.description}>
                               <Text>{el.name}</Text>
                               <Text>{el.date}</Text>
                               <Box h={300} w={400} p={10} bg={"#F2FFF8"}>
                                  <Text>{el.description}</Text>
                               </Box>
                        </Box>
                    })
                  }
 
           </Carousel>
         </>
        )


}

    export default  CustomerSayCrausel