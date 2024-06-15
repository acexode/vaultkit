import { useState, useCallback } from 'react';

const useDialogState = () => {
  const [state, setState] = useState({});

  const openDialog = useCallback((dialogName) => {
    setState((prevState) => ({
      ...prevState,
      [dialogName]: true,
    }));
  }, []);

  const closeDialog = useCallback((dialogName) => {
    setState((prevState) => ({
      ...prevState,
      [dialogName]: false,
    }));
  }, []);

  const isDialogOpen = useCallback((dialogName) => !!state[dialogName], [state]);

  return {
    openDialog,
    closeDialog,
    isDialogOpen,
  };
};

export default useDialogState;
