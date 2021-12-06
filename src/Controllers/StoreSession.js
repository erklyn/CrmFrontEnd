import { useState, createContext, useContext, useEffect } from "react";
import Axios from 'axios';
Axios.defaults.withCredentials = true;



export const CustomerContext = createContext([]);

export const useCustomer = () => useContext(CustomerContext);

export const CustomerWrapper = ({ children }) => {
  const [customer, setCustomer] = useState(null);
  const [working, setWorking] = useState(true);

  const refreshToken = async () => {
    await Axios.post('http://localhost:3001/auth/currentUser').then((response) =>{
        
        setCustomer(response.data)
    })
    setWorking(false)
        
  };  
      
  

  useEffect(() => {
    refreshToken();
    // eslint-disable-next-line
  }, []);

  return (
    <CustomerContext.Provider value={{ customer , setCustomer }}>
      {working ? null : children}
    </CustomerContext.Provider>
  );
};