import PropTypes from 'prop-types';
import React, { useMemo, useContext, useReducer, useCallback, createContext } from 'react';

import { useRouter } from 'src/routes/hooks';
// Define action types
const FORM_UPDATE_FIELD = 'FORM_UPDATE_FIELD';
const FORM_RESET = 'FORM_RESET';
const CURRENT_FORM = 'CURRENT_FORM';

// Define the reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_UPDATE_FIELD:
      return { ...state, [action.field]: action.value };
    case CURRENT_FORM:
      return { ...state, currentForm: action.value };
    case FORM_RESET:
      return action.initialValues;
    default:
      return state;
  }
};

// Create a new context
const GlobalContext = createContext();

// Custom hook to use the GlobalContext
export const useGlobalContext = () => useContext(GlobalContext);
const initialValues = {
  form: {},
  tag: '',
};
// GlobalProvider component to wrap around your form components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialValues);
  const router = useRouter();

  const handleFieldChange = (field, value) => {
    dispatch({ type: FORM_UPDATE_FIELD, field, value });
  };
  const handleCurrentForm = useCallback(
    (value) => {
      dispatch({ type: CURRENT_FORM, value });
      router.push(`/form?tag=${  value}`);
    },
    [router]
  );

  const handleReset = useCallback(() => {
    dispatch({ type: FORM_RESET, initialValues });
  }, []);

  const contextValue = useMemo(
    () => ({
      state,
      initialValues,
      handleFieldChange,
      handleCurrentForm,
      handleReset,
    }),
    [state, handleCurrentForm, handleReset]
  );

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

GlobalProvider.propTypes = {
  children: PropTypes.node,
  // initialValues: PropTypes.object.isRequired,
  // validationSchema: PropTypes.object.isRequired,
  // onSubmit: PropTypes.func.isRequired,
};
