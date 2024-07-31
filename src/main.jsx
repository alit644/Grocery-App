import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import UserProvider from "./Context/UserContext.jsx";
import CartProvider from "./Context/CartContext.jsx";
import ToastProvider from "./Context/ToastContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserProvider>
          <CartProvider>
            <ChakraProvider>
              <ToastProvider>
                <App />
              </ToastProvider>
            </ChakraProvider>
          </CartProvider>
        </UserProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
