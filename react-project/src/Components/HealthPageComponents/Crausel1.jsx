import Carousel from 'react-elastic-carousel';
import {Container, Image} from "@chakra-ui/react"
function Carousel1(){
    
        return (
            <>
            <Carousel  itemPadding={[10, 10]}  itemsToShow={7}>
                  <Image _hover={{transform: "scale(1.1)"}} borderRadius={10} src="https://cdn01.pharmeasy.in/dam/banner/banner/96c84d68e4e-1.jpg"></Image>
                  <Image _hover={{transform: "scale(1.1)"}} borderRadius={10} src="https://cdn01.pharmeasy.in/dam/banner/banner/4b3e0e3e7bb-2.jpg"></Image>
                  <Image _hover={{transform: "scale(1.1)"}} borderRadius={10} src="https://cdn01.pharmeasy.in/dam/banner/banner/e6ea261998e-3.jpg"></Image>
                  <Image _hover={{transform: "scale(1.1)"}} borderRadius={10} src="https://cdn01.pharmeasy.in/dam/banner/banner/8e5fe39ccc8-4.jpg"></Image>
                  <Image _hover={{transform: "scale(1.1)"}}  borderRadius={10} src="https://cdn01.pharmeasy.in/dam/banner/banner/ac7474bbb3a-5.jpg"></Image>
                  <Image _hover={{transform: "scale(1.1)"}} borderRadius={10} src="https://cdn01.pharmeasy.in/dam/banner/banner/f1cda7f9487-6.jpg"></Image>
                  <Image _hover={{transform: "scale(1.1)"}} borderRadius={10} src="https://cdn01.pharmeasy.in/dam/banner/banner/b54aa9eec3f-7.jpg"></Image>
                  <Image _hover={{transform: "scale(1.1)"}} borderRadius={10} src="https://cdn01.pharmeasy.in/dam/banner/banner/abb52ff0abf-Oz369.jpg"></Image>
 
           </Carousel>
         </>
        )
        }

        export default Carousel1;