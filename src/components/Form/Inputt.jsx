/* eslint-disable react/prop-types */
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const Inputt = ({ name, label, type = "text", register, errors, value  }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input type={type} {...register(name)} placeholder={label} defaultValue={value}/>
      <FormHelperText color={"red.500"}>{errors}</FormHelperText>
    </FormControl>
  );
};

export default Inputt;
