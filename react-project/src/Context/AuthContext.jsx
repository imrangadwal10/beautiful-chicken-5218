import {createContext} from "react"
import {useDisclosure} from "@chakra-ui/react";
import React from "react";
export const context= createContext()

function ContextProvider({children}){
    const { isOpen, onOpen, onClose } = useDisclosure()
    
      return <context.Provider value={{isOpen,onClose,onOpen}}>
         {children}
         </context.Provider>
}

export default ContextProvider;