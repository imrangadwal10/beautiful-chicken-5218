import Carousel from 'react-elastic-carousel';
import {Container, Image} from "@chakra-ui/react";
import {trendingDealsData} from "./HealthImgData"
function TrendingDealsCrausel(){
    
        return (
            <>
            <Carousel itemPadding={[10, 10]}  itemsToShow={5.5}>
                 {
                    trendingDealsData.map((el)=>{
                    return     <Image src={el.img}></Image>
                    })
                 }
 
           </Carousel>
         </>
        )
        }

        export default TrendingDealsCrausel;