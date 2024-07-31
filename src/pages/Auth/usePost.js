import { useMutation } from "@tanstack/react-query";
import { useAppToast } from "../../Context/ToastContext";

export const usePost = ({ mutFn, updateUser, cookies }) => {
  const toast = useAppToast();

  return useMutation({
    mutationFn : mutFn,
    onSuccess: (data) => {
      const { accessToken, user } = data;
      updateUser(user);
      cookies.set("token", accessToken);
      setTimeout(() => {
        window.location.href = "/";
      }, 1600);
      toast({
        title: "Login Successful",
        status: "success",
        duration: 1800,
        isClosable: true,
        position: "bottom-right",
      })
    },
    onError: (error) => {
      console.log(error.response.data);
      toast({
        title: error.response.data,
        status: "error",
        duration: 1800,
        isClosable: true,
        position: "bottom-right",
      })
    },
  });
};
