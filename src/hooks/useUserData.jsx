import { useContext } from 'react';

import DataContext from 'src/context/dataContext';




// ----------------------------------------------------------------------

const useUserData = () => useContext(DataContext);

export default useUserData;
