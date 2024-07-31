/* eslint-disable react/prop-types */
import { Box, FormControl, FormLabel, HStack, Input } from "@chakra-ui/react";
import { useUser } from "../../Context/UserContext";

const ProfileInfo = () => {
  const { user } = useUser();
  const Inpute = ({ label, value }) => {
    return (
      <FormControl mb={4} isRequired>
        <FormLabel>{label}</FormLabel>
        <Input placeholder={label} value={value} />
      </FormControl>
    );
  };
  return (
    <Box>
      <HStack>
        <Inpute label={"First Name"} value={user?.firstName} />
        <Inpute label={"Last Name"} value={user?.lastName} />
      </HStack>
      <Inpute label={"Email Address"} value={user?.email} />
      <Inpute label={"Phone Number"} value={user?.phoneNumber} />

    </Box>
  );
};

export default ProfileInfo;
