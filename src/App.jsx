import { Route, Routes } from "react-router-dom";
import "./App.css";
import Root from "./layout/Root";
import MainLayout from "./layout/MainLayout";
import Categories from "./pages/categories/Categories";
import Products from "./pages/products/Products";
import LoginPage from "./pages/Auth/LoginPage";
import SignupPage from "./pages/Auth/SignupPage";
import RequireBack from "./pages/Auth/RequireBack";
import Cart from "./pages/Cart/Cart";
import AllProducts from "./pages/products/AllProducts";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Root />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/prdoucts/:id" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<RequireBack />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
