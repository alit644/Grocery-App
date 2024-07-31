/* eslint-disable react/prop-types */
import { Skeleton } from "@chakra-ui/react";

const MySkeleton = ({w, h }) => {
  return (
    <Skeleton
      m={4}
      w={w}
      h={h}
      rounded={"lg"}
      isLoaded={false}
      mt={7}
    ></Skeleton>
  );
};

export default MySkeleton;
