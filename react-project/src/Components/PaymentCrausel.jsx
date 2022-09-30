import Carousel from 'react-elastic-carousel';
import {Container, Image} from "@chakra-ui/react";
import {PaymentData} from "./Data"
function PaymentCrausel(){
    
        return (
            <>
            <Carousel itemPadding={[10, 10]}  itemsToShow={3}>
                {
                    PaymentData.map((el)=>{
                        return <Image  borderRadius={10} src={el.img}></Image>
                    })
                }
                  
                 
 
           </Carousel>
         </>
        )


}

    export default PaymentCrausel 