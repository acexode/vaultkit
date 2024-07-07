import { Helmet } from 'react-helmet-async';
import {  useSearchParams } from 'react-router-dom';

import { getFormFields } from 'src/_mock/formData';

// import { useGlobalContext } from 'src/context/context';

import { FormView } from 'src/sections/form';



export default function LoginPage() {
    // const {state} = useGlobalContext()
    const route = useSearchParams()
    const tag = route[0].get("tag")
    const {form, title, url} = getFormFields(tag);

  return (
    <>
      <Helmet>
        <title> Form | Vaultkit App </title>
      </Helmet>

      <FormView fields={form} title={title} url={url} tag={tag} />
    </>
  );
}
