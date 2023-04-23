import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '~/firebase/config';
import { Spin } from 'antd';

const AuthContext = React.createContext();

function AuthProvider({children}) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubcribed = auth.onAuthStateChanged((user) => {
      console.log({user});
      if(user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName, email, uid, photoURL
        });
        setIsLoading(false);
        navigate('/chatroom');
      }
      else {
        navigate('/login');
      }
    });

    // clean function
    return () => {
      unsubcribed();
    }
  }, [navigate])

  return (
    <AuthContext.Provider value={{user}}>
      {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  )
}

export {AuthContext}
export default AuthProvider