/* eslint-disable react/prop-types */
import { Box } from '@chakra-ui/react';

const Circle = ({ bottom, left , right ,top }) => {
  return (
    <Box
    zIndex={3}
      outline={"30px solid #65bb75b4"}
      w={{ base: "100px", md: "140px" }}
      h={{ base: "100px", md: "140px" }}
      bg={"transparent"}
      rounded={"full"}
      position={"absolute"}
      bottom={bottom}
      left={left}
      right={right}
      top={top}
    ></Box>
  );
};

export default Circle;
