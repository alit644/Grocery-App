import { createContext, useContext } from "react";
import { useToast } from "@chakra-ui/react";

const ToastContext = createContext();

// eslint-disable-next-line react/prop-types
const ToastProvider = ({ children }) => {
  const toast = useToast();
  return (
    <ToastContext.Provider value={toast}>{children}</ToastContext.Provider>
  );
};
export const useAppToast = () => {
  return useContext(ToastContext);
};
export default ToastProvider;
