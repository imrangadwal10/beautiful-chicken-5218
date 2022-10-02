import Carousel from 'react-elastic-carousel';
import {Image} from "@chakra-ui/react"
function Carousell(){
    
        return (
            <>
            <Carousel itemPadding={[10, 10]} enableAutoPlay={true} autoPlaySpeed={3000}  itemsToShow={2.5}>
                  <Image  borderRadius={10} src="https://cdn01.pharmeasy.in/dam/banner/banner/37176137470-POCK27.jpg"></Image>
                  <Image borderRadius={10} src="https://cdn01.pharmeasy.in/dam/banner/banner/51e34800f6d-HURRAY.jpg"></Image>
                  <Image  borderRadius={10} src="https://cdn01.pharmeasy.in/dam/banner/banner/1255dcab13f-LABTEST450.jpg"></Image>
                  <Image  borderRadius={10} src="https://cdn01.pharmeasy.in/dam/banner/banner/52a0de28cfc-HP.jpg"></Image>
                  <Image  borderRadius={10} src="https://cdn01.pharmeasy.in/dam/banner/banner/2faeb574eaa-slipper.jpg"></Image>
 
           </Carousel>
         </>
        )


}

    export default Carousell 
