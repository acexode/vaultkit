// src/hooks/useGoogleAutocomplete.js
import { useState, useEffect } from 'react';
import usePlacesService from 'react-google-autocomplete/lib/usePlacesService';

const useGoogleAutocomplete = () => {

  const [input, setInput] = useState('');

  const { placePredictions, getPlacePredictions } = usePlacesService({
    apiKey: import.meta.env.VITE_GOOGLE_LOCATION_API,
  });

  useEffect(() => {
   if(input.length > 0){
       const fetchPredictions = () => {
         const request = {
           input,
           types: ['geocode'],
         };
         console.log(request);
         getPlacePredictions(request, (res)=> {
            console.log('logging result');
         });
       };
    
       fetchPredictions();

   }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, getPlacePredictions]);

  return {
    predictions: placePredictions,
    setInput,
  };
};

export default useGoogleAutocomplete;
