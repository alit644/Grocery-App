/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

 const userContext = createContext()


const UserProvider = ({children}) => {
  const [user , setUser] = useState(null)
  useEffect(() => {
  const storedUser =  localStorage.getItem("user") 
  if (storedUser) return setUser(JSON.parse(storedUser))
  }, [])

    // تحديث معلومات المستخدم
    const updateUser = (newUser) => {
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser))
    };
  return (
    <userContext.Provider value={{user , updateUser}} >
      {children}
    </userContext.Provider>
  );
}

export const useUser = () => {
  return useContext(userContext)
}

export default UserProvider;
