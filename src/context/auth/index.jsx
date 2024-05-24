
import PropTypes from 'prop-types';
import { useMemo, useState, useContext, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('lgtk') || '');
 
  const contextValue = useMemo(() => ({
    token,
    user,
    setUser,
    setToken,
  }), [token, user,]);


  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;



AuthProvider.propTypes = {
  children: PropTypes.node,
};

export const useAuth = () => useContext(AuthContext);
