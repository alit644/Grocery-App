import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import OrderMan from "../../assets/orderMan-01.svg";

const Footer = () => {
  return (
    <Box  p={0} mt={9} as="footer">
      <Box
        position={"relative"}
        bg={"#C53330"}
        borderRadius={{ base: "12px 12px 0% 0%", md: "48% 49% 0% 0% / 16% 22% 25% 6%" }}
        w={"100%"}
        // h={{ base: "200px", md: "350px" }}
        p={{ base: 2, md: 9 }}
      >
        {/* order info */}
        <Stack direction={'row'}>
          <Stack
            ml={{ base: 2, md: 4 }}
            h={"100%"}
            justifyContent={"center"}
            direction={'column'}
            alignItems={"start"}
            w={{ base: "100%", md: "50%" }}
          >
            <Heading
              color="white"
              fontWeight={"bold"}
              size={{ base: "md", md: "xl" }}
              lineHeight={"1.2"}
            >
              We ship on the <br /> following day from <br /> 10:00 AM to 11:30
              PM
            </Heading>
            <Text color="white">For Purchases over $19.99</Text>
            <Button
              variant={"contained"}
              bg="white"
              color={"#C53330"}
              rounded={"full"}
            >
              Order Now
            </Button>
          </Stack>
          <Box
            position={{ base: "absolute", md: "absolute" }}
            top={{ base: "-28", md: "-20" }}
            right={{ base: 0, md: 10 }}
            
          >
            <Image
              w={{ base: "200px", md: "400px" }}
              src={OrderMan}
              alt="order man"
            />
          </Box>
        </Stack>
        {/* */}
      </Box>
    </Box>
  );
};

export default Footer;
