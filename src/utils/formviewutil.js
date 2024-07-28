
import { profileRequestMapper } from "src/apis";
import { getSingleProfileDataPatchUrl } from "src/configs/endpoints";

import axiosInstance from "./axios";

export const handleProfileDataSubmit = async (values, tag, id, router, userId) => {
    const api = profileRequestMapper(tag, userId);
   
    let response;
    const singleUrl = getSingleProfileDataPatchUrl(tag, id);
    console.log(singleUrl, 'url');
    if (tag === 'contact-info') {
      const formData = new FormData();
      Object.keys(values).forEach((val) => {
        formData.append(`contact_information[${val}]`, values[val]);
      });
      if (id) {
        
        response = await await axiosInstance.patch(singleUrl, formData);
        if (response.status === 200) {
          router.push('/dashboard/user');
        }
      } else {
        response = await api._create(formData);
      }
    } else if (tag === 'education-info') {
      const formData = new FormData();
      Object.keys(values).forEach((val) => {
        formData.append(`education_data[${val}]`, values[val]);
      });
      if (id) {
        response = await await axiosInstance.patch(singleUrl, formData);
        if (response.status === 200) {
          router.push('/dashboard/user');
        }
      } else {
        response = await api._create(formData);
      }
    } else if (tag === 'employment-info') {
      const formData = new FormData();
      Object.keys(values).forEach((val) => {
        formData.append(val, values[val]);
      });
      if (id) {
        response = await await axiosInstance.patch(singleUrl, formData);
        if (response.status === 200) {
          router.push('/dashboard/user');
        }
      } else {
        response = await api._create(formData);
      }
    } else if (tag === 'personal-info') {
      const data = {
        basic_info: {
          first_name: values.first_name,
          middle_name: values.middle_name,
          last_name: values.last_name,
          phone_number: values.phone_number,
          nationality: values.nationality,
          date_of_birth: values.date_of_birth,
          gender: values.gender,
          mailing_address: values.mailing_address,
          preferred_language: values.preferred_language,
          short_bio: values.short_bio,
          work_authorization: values.work_authorization,
          residency_status: values.residency_status,
          identity_number: values.identity_number,
          profile_picture_url: values.profile_picture_url,
          work_permit_upload_url: values.work_permit_upload_url
        },
      };
        response = await api._create(data);
        if (response.status === 200) {
            router.push('/dashboard/user');
        }
      
    } else if (tag === 'financial-info') {
      if (id) {
        // edit contact
      }
      // create contact
    } else if (tag === 'identification-info') {
      if (id) {
        // edit contact
      }
      // create contact
    } else if (tag === 'realestate-info') {
      const formData = new FormData();
      Object.keys(values).forEach((val) => {
        formData.append(`real_estate_informations[${val}]`, values[val]);
      });
      if (id) {
        response = await await axiosInstance.patch(singleUrl, formData);
        if (response.status === 200) {
          router.push('/dashboard/user');
        }
      } else {
        response = await api._create(formData);
      }
    } else if (tag === 'residential-info') {
      const formData = new FormData();
      Object.keys(values).forEach((val) => {
        formData.append(`residential_history[${val}]`, values[val]);
      });
      if (id) {
        response = await await axiosInstance.patch(singleUrl, formData);
        if (response.status === 200) {
          router.push('/dashboard/user');
        }
      } else {
        response = await api._create(formData);
      }
    }
    return response;
  };

  export const validationFieldMapper = (fields, validationSchema, Yup) => {
    const vals = {}
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
              typeof originalValue === 'object'
                ? Object.values(originalValue).join(' ')
                : originalValue
            )
            .required(`${field.label} is required`);
        } else {
          validationSchema[field.name] = Yup.string().required(`${field.label} is required`);
        }
      });
      return vals
  }