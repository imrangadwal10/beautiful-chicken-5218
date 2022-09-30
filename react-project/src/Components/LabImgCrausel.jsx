import {LabTestImg} from "./Data";
import Carousel from 'react-elastic-carousel';
import {Container, Image} from "@chakra-ui/react"

function LabImgCrausel(){

      return <Carousel itemPadding={[10, 10]}   itemsToShow={6}>

             {

             LabTestImg.map((el)=>{
                     return <Image w={200} borderRadius={10} src={el.img}></Image>
                })
             }
                  
                  
 
           </Carousel>
}
export default LabImgCrausel;
