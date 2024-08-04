import { profileRequestMapper } from 'src/apis';
import { getSingleProfileDataPatchUrl } from 'src/configs/endpoints';

import axiosInstance from './axios';

export const handleProfileDataSubmit = async (values, tag, id, router, userId) => {
  const api = profileRequestMapper(tag, userId);
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

  // Helper function to handle API responses
  const handleResponse = async (apiResponse) => {
    if (apiResponse.status === 200) {
      router.push('/dashboard/user');
    }
    return apiResponse;
  };

  // Logic map for handling different tags
  const tagHandlers = {
    'contact-info': async () => {
      const formData = createFormData('contact_information');
      response = id ? await axiosInstance.patch(singleUrl, formData) : await api._create(formData);
      return handleResponse(response);
    },
    'education-info': async () => {
      const formData = createFormData('education_data');
      response = id ? await axiosInstance.patch(singleUrl, formData) : await api._create(formData);
      return handleResponse(response);
    },
    'employment-info': async () => {
      const formData = createFormData();
      response = id ? await axiosInstance.patch(singleUrl, formData) : await api._create(formData);
      return handleResponse(response);
    },
    'personal-info': async () => {
      const data = { basic_info: { ...values } };
      response = await api._create(data);
      return handleResponse(response);
    },
    'fin-assets': async () => {
      const payload = { asset: { ...values } };
      response = id ? await axiosInstance.patch(singleUrl, values) : await api._create(payload);
      return handleResponse(response);
    },
    'fin-bank-details': async () => {
      const payload = { bank_detail: { ...values } };
      console.log(payload);
      console.log(api);
      response = id ? await axiosInstance.patch(singleUrl, values) : await api._create(payload);
      return handleResponse(response);
    },
    'fin-liability-info': async () => {
      const payload = { liability: { ...values } };
      response = id ? await axiosInstance.patch(singleUrl, values) : await api._create(payload);
      return handleResponse(response);
    },
    'fin-insurance-info': async () => {
      const payload = { insurance: { ...values } };
      response = id ? await axiosInstance.patch(singleUrl, values) : await api._create(payload);
      return handleResponse(response);
    },
    'fin-investment-info': async () => {
      const payload = { investment: { ...values } };
      response = id ? await axiosInstance.patch(singleUrl, values) : await api._create(payload);
      return handleResponse(response);
    },
    'identification-info': async () => 
      // Implement identification-info logic here
       handleResponse(response)
    ,
    'realestate-info': async () => {
      const formData = createFormData('real_estate_informations');
      response = id ? await axiosInstance.patch(singleUrl, formData) : await api._create(formData);
      return handleResponse(response);
    },
    'residential-info': async () => {
      const formData = createFormData('residential_history');
      response = id ? await axiosInstance.patch(singleUrl, formData) : await api._create(formData);
      return handleResponse(response);
    },
  };

  // Execute the handler for the given tag
  if (tagHandlers[tag]) {
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
