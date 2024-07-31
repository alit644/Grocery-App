import { Button, useToast } from "@chakra-ui/react";

const Toastt = () => {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: `success  toast`,
          status: "success",
          isClosable: true,
          position: "bottom-right",
          duration: 1800,
        })
      }
    >
      Show success toast
    </Button>
  );
};

export default Toastt;
