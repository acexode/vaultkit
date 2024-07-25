/* eslint-disable react/jsx-no-constructed-context-values */
import axios from 'axios';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { useEffect, useReducer, createContext } from 'react';

import axiosInstance from 'src/utils/axios';
import { cacheUser, setSession, isValidToken } from 'src/utils/jwt';

import { authEndpoints, serverBaseUrl, profileEndpoint } from 'src/configs/endpoints';

// utils


// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  }
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
  ...initialState,
  method: 'jwt',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  getBasicInfo: () => Promise.resolve()
});

AuthProvider.propTypes = {
  children: PropTypes.node
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.sessionStorage.getItem('authToken');
        const cachedUser = window.sessionStorage.getItem('user');
         console.log(cachedUser, isValidToken(accessToken))
        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
          
          const user = JSON.parse(cachedUser);
          console.log("USER")
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user
            }
          });
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null
            }
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    };

    initialize();
  }, []);
  const getBasicInfo = async () => {
    const url = `${serverBaseUrl  }/users`;
    const path = profileEndpoint(url);
    try {
      
      const basicInfoResponse = await axiosInstance.get(path.basic);
      console.log(basicInfoResponse)
      const user = {...state.user, basic: basicInfoResponse.data}
      console.log(user, "USER")
      dispatch({
        type: 'INITIALIZE',
        payload: {
          isAuthenticated: true,
          user
        }
      });
      
    } catch (error) {
      enqueueSnackbar(error.response?.message)
    }
  }
  const login = async (values) => {
    const response = await axios.post(authEndpoints.login, values);
   
    const token = response.headers.authorization;
    
    const { data } = response.data.status;
    
    cacheUser(data.user)
    setSession(token);
    dispatch({
      type: 'LOGIN',
      payload: {
        user: data.user
      }
    });
    return response
  };

  const registerIndiviual = async (values) => {
    const user = values

    const response = await axios.post(authEndpoints.signupUser, {
      user
    });
    const token = response.headers.authorization;
    const { data } = response.data;
    cacheUser(data)
    setSession(token);
    dispatch({
      type: 'REGISTER',
      payload: {
        user: data
      }
    });
    return response
  };

  const registerOrganization = async (values) => {

    const organization =  {email: values.email, password: values.password, name: values.name, password_confirmation: values.password, business_type: values.business_type, description: values.description} ;

    const response = await axios.post(authEndpoints.signupCompany, {
      organization
    });
    const token = response.headers.authorization;
    const { data } = response.data;
    console.log(token, response)
    cacheUser(data)
    setSession(token);
    dispatch({
      type: 'REGISTER',
      payload: {
        user: data
      }
    });
    return response
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  // eslint-disable-next-line consistent-return
  const resetPassword = async (data) => {
    try {
      console.log(data)
      const response = await axios.post(authEndpoints.resetPassword, data)
      if(response?.status === 200) {
        return response
      }
    } catch (error) {
      console.log(error?.response);
      throw new Error(error?.response?.data?.message || 'Something went wrong');
    }
    
  };

  const updateProfile = () => {};

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
        registerIndiviual,
        resetPassword,
        updateProfile,
        registerOrganization,
        getBasicInfo
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
