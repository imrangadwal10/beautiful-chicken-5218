import Carousel from 'react-elastic-carousel';
import {Image} from "@chakra-ui/react"
import {imgData} from "./Data"
import {useNavigate} from "react-router-dom"

function ImageCrausel(){       
    const nav=useNavigate()
    
    function handleClick(){ 
         nav("/health")
        }


        return (
            <>
            <Carousel itemPadding={[10, 10]} itemsToShow={4}>
               {
                imgData.map((el)=>{
                    return <Image key={el.img} _hover={{cursor: "pointer"}} onClick={handleClick} src={el.img}/>
                })
               }   
 
           </Carousel>
         </>
        )


}

    export default ImageCrausel; 
