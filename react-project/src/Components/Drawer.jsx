import {
  Input,
  Image,
  Text,
  Drawer,
  Button,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  PinInput,
  PinInputField,
  Box,
  useToast
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { context } from "../Context/AuthContext";

const initialState={
   a:"",
   b:"",
   c:"",
   d:"",
   e:"",
   f:"",
}


function DrawerComp({ btnRef }) {
  const [state, setState] = useState(true);
  const { onClose, isOpen } = useContext(context);
  const [text,setText]=useState("");
  const [otp,setOtp]=useState(initialState);
  const [message,setMessage]=useState("");
  const [final,setFinal]=useState("");
  const toast=useToast()


  function handleChange(e) {
    setText(e.target.value);
   
  }

  function sendEmail(otp) {
    if(state){
      postEmail()
      setState(false);
    }else{
      postOtp()
      if(message==="Login Successfull"){
        toast({
          title: 'Login Successfull.',
          description: "You have logged inn successfully.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        onClose()
      }else{
        toast({
          title: 'Login failed.',
          description: "Login failed.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    }
  }

 

 async function postEmail() {
    let res=await fetch(`http://localhost:5000/signup-login`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({email:text}),
    })
    let data=res.json()
     data.then((res)=>{
       
     })
 }

 function handleOtp(e){
  const {name,value} = e.target
    setOtp({...otp,[name]:value})
 }


 async function postOtp() {
  const {a,b,c,d,e,f}=otp;

    let res=await fetch(`http://localhost:5000/verify`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
     
      body: JSON.stringify({otp: (a+b+c+d+e+f).toString()}),
    })
    let data=res.json()
     data.then((res) => {
        setMessage(res.message)
     })
    
 }

  return (
    <>
      <Drawer
        size={"sm"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader p={6} bg={"#10847E"}>
            <Image
              w={190}
              src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png?dim=256x0"
            />
          </DrawerHeader>
          <DrawerBody>
            <Text p={"16px"}>Quick Login / Register</Text>
            {state ? (
              <Input
                onChange={handleChange}
                border={"2px solid silver"}
                placeholder="Enter your Email Address"
                required
                type="email"
              />
            ) : (
              <Box display={"flex"} justifyContent="space-between">
                <PinInput otp >
                  <PinInputField name="a" value={otp.a} onChange={(e)=>handleOtp(e)}/>
                  <PinInputField name="b" value={otp.b} onChange={(e)=>handleOtp(e)}/>
                  <PinInputField name="c" value={otp.c} onChange={(e)=>handleOtp(e)}/>
                  <PinInputField name="d" value={otp.d} onChange={(e)=>handleOtp(e)}/>
                  <PinInputField name="e" value={otp.e} onChange={(e)=>handleOtp(e)}/>
                  <PinInputField name="f" value={otp.f} onChange={(e)=>handleOtp(e)}/>
                </PinInput>
              </Box>
            )}
            <Button
              _hover={{ bgColor: "#10847E" }}
              w={"full"}
              borderRadius="2px"
              p={6}
              mt={15}
              bg={"#10847E"}
              color={"white"}
              onClick={sendEmail}
            >
              {state ? "Send OTP" : "SUBMIT"}
            </Button>
            <Text fontSize={12} pt={4}>
              By clicking continue, you agree with our <b>Privacy Policy</b>
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerComp;
