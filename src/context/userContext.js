import React, { useState,useEffect,useContext } from 'react';
import { useCookies } from 'react-cookie';

//Creating context
const UserContext = React.createContext({});
 /*
    1. Usered not logged in it has to login page for any URL
    2. User session timeout also should go loging page.
    3. After sucessfull authentication needto store the token.
    4. For each and every api request must have authentication header with valid token. 
    5. session storage, localstorage, cookies.

  // var roles=["READ", "Rigth"]
       // localStorage.setItem('roles', JSON.stringify(roles));
       // sessionStorage.setItem("roles",JSON.stringify(roles));
       // document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

    */

// 2. Create the Provider Component
export const UserProvider = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['user-session']);
    const [user, setUser] = useState(null); // Initially, no user is logged in
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null);
    const [hasSession, setHasSession] =useState(false);
    useEffect(() => {
        console.log("Checking for cookie.")
       if (cookies && cookies.jwtToken!=undefined){
            setHasSession(true);
            try {
                //Get user information from decoding token.
             } catch (parseError) {
               console.error("Error parsing user from local storage", parseError);
             }
       }
    },[hasSession,cookies]);
  
    const login = async (userData) => {
      setLoading(true);
      try {
        var body={ 'username': userData.username, 'password':userData.password };
        const response = await fetch('/api/v1/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
  
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || 'Login failed');
        }
        const authResponse = await response.json();
       // console.log(authResponse)
        const currentTime = new Date();
        const expirationTime = new Date(currentTime); // Important: Create a copy!
        expirationTime.setHours(currentTime.getHours() + 1);
        var options={
         expires: expirationTime
        }
        setCookie("jwtToken",authResponse.jwtToken, options)
        setHasSession(true);
        setUser({...user, name: "Service user"})
        setError(null);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const logout = () => {
      removeCookie("jwtToken");
      setUser(null);
      setHasSession(false);
    };
  
    const value = { hasSession, user, login, logout, loading, error }; // The value provided to consumers
  
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
  };


  export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  };