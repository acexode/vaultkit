import { profileRequestMapper } from 'src/apis';
import { getSingleProfileDataPatchUrl } from 'src/configs/endpoints';

import axiosInstance from './axios';

export const handleProfileDataSubmit = async (values, tag, id, router, userId, enqueueSnackbar) => {
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

  const handleResponse = async (apiResponse, msg) => {
    if (apiResponse.status === 200) {
      router.push('/dashboard/user');
      enqueueSnackbar(msg, {
        variant: 'success',
      });
    }
    return apiResponse;
  };

  const tagHandlers = {
    'contact-info': async () => {
      const formData = createFormData('contact_information');
      response = id ? await axiosInstance.patch(singleUrl, formData) : await api._create(formData);
      const msg = successMsg("Contact", id)
      return handleResponse(response, msg);
    },
    'education-info': async () => {
      const formData = createFormData('education_data');
      response = id ? await axiosInstance.patch(singleUrl, formData) : await api._create(formData);
      const msg = successMsg("Education", id)
      return handleResponse(response, msg);
    },
    'employment-info': async () => {
      const formData = createFormData();
      response = id ? await axiosInstance.patch(singleUrl, formData) : await api._create(formData);
      const msg = successMsg("Employment", id)
      return handleResponse(response, msg);
    },
    'personal-info': async () => {
      const data = { basic_info: { ...values } };
      response = await api._create(data);
      const msg = successMsg("Personal", id)
      return handleResponse(response, msg);
    },
    'fin-assets': async () => {
      const payload = { asset: { ...values } };
      response = id ? await axiosInstance.patch(singleUrl, values) : await api._create(payload);
      const msg = successMsg("Financial Assets", id)
      return handleResponse(response, msg);
    },
    'fin-bank-details': async () => {
      const payload = { bank_detail: { ...values } };
      response = id ? await axiosInstance.patch(singleUrl, values) : await api._create(payload);
      const msg = successMsg("Bank Details", id)
      return handleResponse(response, msg);
    },
    'fin-liability-info': async () => {
      const payload = { liability: { ...values } };
      response = id ? await axiosInstance.patch(singleUrl, values) : await api._create(payload);
      const msg = successMsg("Financial Liability", id)
      return handleResponse(response, msg);
    },
    'fin-insurance-info': async () => {
      const payload = { insurance: { ...values } };
      response = id ? await axiosInstance.patch(singleUrl, values) : await api._create(payload);
      const msg = successMsg("Financial Insurance", id)
      return handleResponse(response, msg);
    },
    'fin-investment-info': async () => {
      const payload = { investment: { ...values } };
      response = id ? await axiosInstance.patch(singleUrl, values) : await api._create(payload);
      const msg = successMsg("Financial Investment", id)
      return handleResponse(response, msg);
    },
    'identification-info': async () => 
      // Implement identification-info logic here
       handleResponse(response)
    ,
    'realestate-info': async () => {
      const formData = createFormData('real_estate_informations');
      response = id ? await axiosInstance.patch(singleUrl, formData) : await api._create(formData);
      const msg = successMsg("Real Estate", id)
      return handleResponse(response, msg);
    },
    'residential-info': async () => {
      const formData = createFormData('residential_history');
      response = id ? await axiosInstance.patch(singleUrl, formData) : await api._create(formData);
      const msg = successMsg("Residential History", id)
      return handleResponse(response, msg);
    },
  };


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

const successMsg = (category, id) => id ? ` ${category} Information Updated Successfully` : `${category} Information Created Successfully`
