// context/ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchData } from './api/fetchApi';

// Create a new context
const ThemeContext = createContext();

// Create a provider component
export function ThemeProvider({ children }) {

    const [user, setUser] = useState({});
    useEffect(() => {
      const fetchDataAsync = async () => {
        const res = await fetchData('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae#');
       
        setUser(res.user);
        console.log(user);
      };
      
      fetchDataAsync();
    }, []);

  return (
<ThemeContext.Provider value={{user}}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for consuming the theme context
export function useTheme() {
  return useContext(ThemeContext);
}
