import Cookies from "universal-cookie";

export  const handelLogout = () => {
  const cookies = new Cookies();

  cookies.remove("token");
  localStorage.removeItem("user");
  window.location.href = "/";
}