import { Box, Container, Image, Text } from "@chakra-ui/react"

function Footer(){
  return <>
   <Container display={"flex"} mt={20} maxW={"95%"} bg={"#F2F9FF"}>
  <Box mt={6} p={10}>
  <Box>
     <Text mb={3}><b>Company</b></Text>
      <Text>About Us</Text>
      <Text>Careers</Text>
      <Text>Blog</Text>
      <Text>Partner with PharmEasy</Text>
      <Text>Sell at PharmEasy</Text>
     </Box>
     <Box mt={10}>
        <Text mb={3}><b>Company</b></Text>
      <Text>About Us</Text>
      <Text>Careers</Text>
      <Text>Blog</Text>
      <Text>Partner with PharmEasy</Text>
      <Text>Sell at PharmEasy</Text>
     </Box>
  </Box>
  <Box>
  <Box ml={170} mt={16}>
        <Text mb={3}><b>Featured Categories</b></Text>
      <Text>Covid Essentials</Text>
      <Text>Personal Care</Text>
      <Text>Health Food and Drinks</Text>
      <Text>Beauty</Text>
      <Text>Skin Care</Text>
      <Text>Home Care</Text>
      <Text>Ayurvedic Care</Text>
      <Text>Sexual Wellness</Text>
      <Text>Fitness Supplements</Text>
      <Text>Mother and Baby Care</Text>
      <Text>Healthcare Devices</Text>
      <Text>Health Condition</Text>
      <Text>Diabetic Care</Text>
      <Text>Elderly Care</Text>
      <Text>Accessories And Wearables</Text>
      <Text>Top Products</Text>
     </Box>
  </Box>
  <Box ml={180} mt={6} p={10}>
  <Box>
     <Text mb={3}><b>Need Help</b></Text>
      <Text>Browse All Medicines</Text>
      <Text>Browse All Molecules</Text>
      <Text>Browse All Cities</Text>
      <Text>Browse All Areas</Text>
      <Text>Browse All Stores</Text>
     </Box>
     <Box mt={10}>
        <Text mb={3}><b>FAQs</b></Text>
      <Text>Policy Info</Text>
      <Text>Editorial Policy</Text>
      <Text>Privacy Policy</Text>
      <Text>Vulnerability Disclosure Policy</Text>
      <Text>Terms and Conditions</Text>
      <Text>Customer Support Policy</Text>
      <Text>Return Policy</Text>
     </Box>
  </Box>
  <Box mt={6} ml={50}>
  <Box>
  <Text p={10} mb={3}><b>Follow us on</b></Text>
    <Box ml={37} display={"flex"} gap={5} mt={-30}>
    <Image src="https://assets.pharmeasy.in/apothecary/images/Instagram.svg?dim=32x0"></Image>
    <Image src="https://assets.pharmeasy.in/apothecary/images/facebook.svg?dim=32x0"/>
    <Image src="https://assets.pharmeasy.in/apothecary/images/Youtube.svg?dim=32x0"/>
    <Image src="https://assets.pharmeasy.in/apothecary/images/Twitter.svg?dim=32x0"/>
   
    </Box>
 </Box>
  </Box>
  
 </Container>
 <Container pt={10} pb={20} bg={"#F2F9FF"} maxW={"full"}>
 <Box ml={70}>
 <Text mb={3}><b>Our Payment Partners</b></Text>
 <Box  display={"flex"} gap={`10`}>
     <Image w={"50px"} h={"20px"} src="https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0"/>
     <Image  w={"50px"} h={"20px"} src="https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0"/>
     <Image  w={"20px"} h={"20px"} src="https://assets.pharmeasy.in/apothecary/images/phonepe.png?dim=1440x0"/>
     <Image  w={"30px"} h={"20px"} src="https://assets.pharmeasy.in/apothecary/images/amazon.png?dim=1440x0"/>
     <Image  w={"40px"} h={"20px"} src="https://assets.pharmeasy.in/apothecary/images/mobikwik.png?dim=1440x0"/>
     <Image  w={"40px"} h={"20px"} src="https://assets.pharmeasy.in/apothecary/images/olamoney.png?dim=1440x0"/>
     <Image  w={"40px"} h={"20px"} src="https://assets.pharmeasy.in/apothecary/images/maestro.png?dim=1440x0"/>
     <Image  w={"40px"} h={"20px"} src="https://assets.pharmeasy.in/apothecary/images/mastercard.png?dim=1440x0"/>
     <Image  w={"50px"} h={"20px"} src="https://assets.pharmeasy.in/apothecary/images/visa.png?dim=1440x0"/>
     <Image  w={"50px"} h={"20px"} src="https://assets.pharmeasy.in/apothecary/images/rupay.png?dim=1440x0"/>
     <Text ml={280}>© 2022 PharmEasy. All Rights Reserved</Text>
 </Box>
</Box>
 </Container>
</>
     
}

export default Footer;