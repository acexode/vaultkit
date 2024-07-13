
/** BASE URL */
export const serverBaseUrl = 'https://vaultkit-1.onrender.com';
const user = JSON.parse(sessionStorage.getItem('user'))

export const baseEndpoints = {
  auth: `${serverBaseUrl  }/`,
  profiles: `${serverBaseUrl  }/users/${user?.id}`,
  profile: `${serverBaseUrl  }/users`,
  share: `${serverBaseUrl  }/permission_base/access_requests`,
};



export const authEndpoints = {
  login: `${baseEndpoints.auth  }login`,
  signupUser: `${baseEndpoints.auth  }signup`,
  signupCompany: `${baseEndpoints.auth  }organizations/signup`,
  siginupCompany: `${baseEndpoints.auth  }organizations/login`,
  activate: `${baseEndpoints.auth  }/register/activate`,
  resetPassword: `${baseEndpoints.auth  }password`,
  updatedPassword: `${baseEndpoints.auth  }password`,
  changePassword: `${baseEndpoints.auth  }/change-password`,
  updateProfile: `${baseEndpoints.auth  }/update/profile`,
  updateProfileImage: `${baseEndpoints.auth  }/update/profile/image`,
};

export const sharedDataEndpoint = {
  share: `${baseEndpoints.extractApproval  }/share`,

}
export const profileEndpoint = {
  basic: `${baseEndpoints.profiles  }`,
  contact: `${baseEndpoints.profiles  }/contact_information`,
  eduInfo: `${baseEndpoints.profiles  }/education_data`,
  empInfo: `${baseEndpoints.profiles  }/employment_informations`,
  finInfo: `${baseEndpoints.profiles  }/fin-info`,
  idInfo: `${baseEndpoints.profiles  }/id-info`,
  realInfo: `${baseEndpoints.profiles  }/real_estate_informations`,
  resInfo: `${baseEndpoints.profiles  }/residential_histories`,

}

export const requestDataEndpoint = {
    request: `${baseEndpoints.share  }`,
    share: `${baseEndpoints.share  }/share_data`,
  }


export const getSingleProfileUrl = (category, id, userId) => {
  let api = null;
  switch (category) {
      case 'contact-info':
          api = `${baseEndpoints.profile}/${userId}/contact_information`
          break;
      case 'education-info':
          api = `${baseEndpoints.profile}/education_data/${id}`
          break;
      case 'employment-info':
          api = `${baseEndpoints.profile}/employment_informations/${id}` 
          break;
      case 'personal-info':
          api = `${baseEndpoints.profile}/${id}` 
          break;
      case 'financial-info':
          api = `${baseEndpoints.profile}/finanacial_informations/${id}` 
          break;
      case 'identification-info':
          api = `${baseEndpoints.profile}/identification_informations/${id}` 
          break;
      case 'realestate-info':
          api = `${baseEndpoints.profile}/real_estate_informations/${id}` 
          break;
      case 'residential-info':
          api = `${baseEndpoints.profile}/residential_histories/${id}` 
          break;
      default:
          api = null;
          break;
  }
  return api
}

export const getSingleProfileDataPatchUrl = (category, id) => {
  let api = null;
  switch (category) {
      case 'contact-info':
          api = `${baseEndpoints.profiles}/contact_information`
          break;
      case 'education-info':
          api = `${baseEndpoints.profile}/education_data/${id}`
          break;
      case 'employment-info':
          api = `${baseEndpoints.profile}/employment_informations/${id}` 
          break;
      case 'personal-info':
          api = `${baseEndpoints.profile}/${id}` 
          break;
      case 'financial-info':
          api = `${baseEndpoints.profile}/finanacial_informations/${id}` 
          break;
      case 'identification-info':
          api = `${baseEndpoints.profile}/identification_informations/${id}` 
          break;
      case 'realestate-info':
          api = `${baseEndpoints.profile}/real_estate_informations/${id}` 
          break;
      case 'residential-info':
          api = `${baseEndpoints.profile}/residential_histories/${id}` 
          break;
      default:
          api = null;
          break;
  }
  return api
}