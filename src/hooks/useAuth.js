import { useContext } from 'react';

import { AuthContext } from 'src/context/authContext';


// ----------------------------------------------------------------------

const useAuth = () => useContext(AuthContext);

export default useAuth;
