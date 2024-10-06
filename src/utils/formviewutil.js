import { profileRequestMapper } from 'src/apis';
import { getSingleProfileDataPatchUrl } from 'src/configs/endpoints';

import axiosInstance from './axios';

export const handleProfileDataSubmit = async (
  values,
  tag,
  id,
  router,
  userId,
  enqueueSnackbar,
  fin_info_id,
  setloading
) => {
  const api = profileRequestMapper(tag, userId, fin_info_id);
  const singleUrl = getSingleProfileDataPatchUrl(tag, id);
  let response;

  // Helper function to create FormData
  const createFormData = (prefix) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(prefix ? `${prefix}[${key}]` : key, values[key]);
    });
    return formData;
  };

  const handleResponse = async (apiResponse, msg) => {
    if (apiResponse.status === 200 || apiResponse.status === 201) {
      router.push('/dashboard/user');
      enqueueSnackbar(msg, {
        variant: 'success',
      });
    }
    setloading(false)
    return apiResponse;
  };

  const tagHandlers = {
    'contact-info': async () => {
      const formData = createFormData('contact_information');
      response = id ? await axiosInstance.patch(singleUrl, formData) : await api._create(formData);
      const msg = successMsg('Contact', id);
      const res = await handleResponse(response, msg)
      enqueueSnackbar(res.error.data.error.join(","), {
        variant: 'error',
      });
      return res
    },
    'education-info': async () => {
      const formData = createFormData('education_data');
      response = id ? await axiosInstance.patch(singleUrl, formData) : await api._create(formData);
      const msg = successMsg('Education', id);
      const res = await handleResponse(response, msg)
      enqueueSnackbar(res.error.data.error, {
        variant: 'error',
      });
      return res
    },
    'employment-info': async () => {
      const formData = createFormData();
      response = id ? await axiosInstance.patch(singleUrl, formData) : await api._create(formData);
      const msg = successMsg('Employment', id);
      const res = await handleResponse(response, msg)
      enqueueSnackbar(res.error.data.errors, {
        variant: 'error',
      });
      console.log(res);
      return res
    },
    'personal-info': async () => {
      // const {nationality, ...others} = values
      // const data = { basic_information: { ...values } };
      // console.log(data, nationality);
      const formData = createFormData('basic_information');
      console.log(singleUrl);
      response = id ? await axiosInstance.patch(singleUrl, formData) : await api._create(formData);
      const msg = successMsg('Personal', id);
      return handleResponse(response, msg);
    },
    'assets': async () => {
      const payload = { asset: { ...values } };
      response = id ? await axiosInstance.patch(singleUrl, payload) : await api._create(payload);
      const msg = successMsg('Financial Assets', id);
      return handleResponse(response, msg);
    },
    'financial-info': async () => {
      const payload = { financial_information: { ...values } };
      const updatePayload = {
        financial_information: {
          sources_of_income: [values.sources_of_income],
          annual_income: values.annual_income,
          credit_score: values.credit_score,
          credit_history: values.credit_history,
        },
      };
      console.log(payload, singleUrl);
      response = id ? await axiosInstance.patch(singleUrl, updatePayload) : await api._create(updatePayload);
      const msg = successMsg('Financial Information', id);
      return handleResponse(response, msg);
    },
    'bank_details': async () => {
      const payload = { bank_detail: { ...values } };
      response = id ? await axiosInstance.patch(singleUrl, payload) : await api._create(payload);
      const msg = successMsg('Financial Information', id);
      return handleResponse(response, msg);
    },
    'liabilities': async () => {
      const payload = { liability: { ...values } };
      response = id ? await axiosInstance.patch(singleUrl, payload) : await api._create(payload);
      const msg = successMsg('Financial Liability', id);
      return handleResponse(response, msg);
    },
    'insurances': async () => {
      const payload = { insurance: { ...values } };
      response = id ? await axiosInstance.patch(singleUrl, payload) : await api._create(payload);
      const msg = successMsg('Financial Insurance', id);
      return handleResponse(response, msg);
    },
    'investments': async () => {
      const payload = { investment: { ...values } };
      response = id ? await axiosInstance.patch(singleUrl, payload) : await api._create(payload);
      const msg = successMsg('Financial Investment', id);
      return handleResponse(response, msg);
    },
    'identification-info': async () =>{
      // Implement identification-info logic here
      const formData = createFormData('identification_data');
      console.log(singleUrl);
      response = id ? await axiosInstance.patch(singleUrl, formData) : await api._create(formData);
      const msg = successMsg('Contact', id);
      const res = await handleResponse(response, msg)
      enqueueSnackbar(res.error.data.error.join(","), {
        variant: 'error',
      });

  
    },
    
    'realestate-info': async () => {
      const formData = createFormData('real_estate_informations');
      response = id ? await axiosInstance.patch(singleUrl, formData) : await api._create(formData);
      const msg = successMsg('Real Estate', id);
      return handleResponse(response, msg);
    },
    'residential-info': async () => {
      const formData = createFormData('residential_history');
      response = id ? await axiosInstance.patch(singleUrl, formData) : await api._create(formData);
      const msg = successMsg('Residential History', id);
      return handleResponse(response, msg);
    },
  };

  if (tagHandlers[tag]) {
    console.log(tag);
    return tagHandlers[tag]();
  }
  console.error(`No handler for tag: ${tag}`);

  return response;
};

export const validationFieldMapper = (fields, validationSchema, Yup) => {
  const vals = {};
  fields.forEach((field) => {
    vals[field.name] = field.defaultValue || '';

    if (field.name === 'phone_number') {
      validationSchema[field.name] = Yup.string()
        .matches(/^\d+$/, 'Phone number must be digits only')
        .required('Phone number is required');
    } else if (field.name === 'social_media_links' && field.type === 'social_media') {
      vals[field.name] = Object.values(field.defaultValue).join(' ') || '';
      validationSchema[field.name] = Yup.string()
        .transform((value, originalValue) =>
          typeof originalValue === 'object' ? Object.values(originalValue).join(' ') : originalValue
        )
        .required(`${field.label} is required`);
    } else {
      validationSchema[field.name] = Yup.string().required(`${field.label} is required`);
    }
  });
  return vals;
};

const successMsg = (category, id) =>
  id
    ? ` ${category} Information Updated Successfully`
    : `${category} Information Created Successfully`;
