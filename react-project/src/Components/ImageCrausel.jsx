import Carousel from 'react-elastic-carousel';
import {Image} from "@chakra-ui/react"
import {imgData} from "./Data"
import {Navigate,useNavigate} from "react-router-dom"

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
                    return <Image onClick={handleClick} src={el.img}/>
                })
               }   
 
           </Carousel>
         </>
        )


}

    export default ImageCrausel; 
