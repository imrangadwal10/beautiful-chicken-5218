import Carousel from 'react-elastic-carousel';
import {Container, Image} from "@chakra-ui/react"
import {imgData} from "./Data"
function ImageCrausel(){
    
        return (
            <>
            <Carousel itemPadding={[10, 10]} itemsToShow={4}>
               {
                imgData.map((el)=>{
                    return <Image src={el.img}/>
                })
               }   
 
           </Carousel>
         </>
        )


}

    export default ImageCrausel; 
