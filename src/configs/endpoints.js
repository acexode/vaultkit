/** BASE URL */
export const serverBaseUrl = 'https://vaultkit-1.onrender.com';
const user = JSON.parse(sessionStorage.getItem('user'));

export const baseEndpoints = {
  auth: `${serverBaseUrl}/`,
  profiles: `${serverBaseUrl}/users/${user?.id}`,
  profile: `${serverBaseUrl}/users`,
  share: `${serverBaseUrl}/permission_base/access_requests`,
};

export const authEndpoints = {
  login: `${baseEndpoints.auth}login`,
  signupUser: `${baseEndpoints.auth}signup`,
  signupCompany: `${baseEndpoints.auth}organizations/signup`,
  siginupCompany: `${baseEndpoints.auth}organizations/login`,
  activate: `${baseEndpoints.auth}/register/activate`,
  resetPassword: `${baseEndpoints.auth}password`,
  updatedPassword: `${baseEndpoints.auth}password`,
  changePassword: `${baseEndpoints.auth}/change-password`,
  updateProfile: `${baseEndpoints.auth}/update/profile`,
  updateProfileImage: `${baseEndpoints.auth}/update/profile/image`,
};

export const sharedDataEndpoint = {
  share: `${baseEndpoints.extractApproval}/share`,
};
export const profileEndpoint = (path, id) => ({
  basic: `${path}/basic_info`,
  contact: `${path}/${id}/contact_information`,
  eduInfo: `${path}/${id}/education_data`,
  empInfo: `${path}/${id}/employment_informations`,
  finInfo: `${path}/${id}/fin-info`,
  idInfo: `${path}/${id}/id-info`,
  realInfo: `${path}/${id}/real_estate_informations`,
  resInfo: `${path}/${id}/residential_histories`,
});

export const notificationEndpoint = (userId, id) => ({
  allNotification: `${serverBaseUrl}/notifications/users/${userId}/notifications`,
  unreadNotification: `${serverBaseUrl}/notifications/users/${userId}/notifications/unread`,
  updateNotification: `${serverBaseUrl}/users/${userId}/notifications/${id}`,
  allActivities: `${serverBaseUrl}/users/${userId}/activity_log/`,
});

export const requestDataEndpoint = (id) => ({
  request: `${baseEndpoints.share}`,
  share: `${baseEndpoints.share}/share_data`,
  approve: `${baseEndpoints.share}/${id}/approve_request`,
  recievedDataRequest: `${baseEndpoints.share}/received_data_requests`,
  sentDataRequest: `${baseEndpoints.share}/sent_data_requests`,
  sharedData: `${baseEndpoints.share}/shared_data`,
  recievedData: `${baseEndpoints.share}/received_data`,
});

export const getSingleProfileUrl = (category, id, userId) => {
  let api = null;
  switch (category) {
    case 'contact-info':
      api = `${baseEndpoints.profile}/${userId}/contact_information`;
      break;
    case 'education-info':
      api = `${baseEndpoints.profile}/education_data/${id}`;
      break;
    case 'employment-info':
      api = `${baseEndpoints.profile}/employment_informations/${id}`;
      break;
    case 'personal-info':
      api = `${baseEndpoints.profile}/basic_info`;
      break;
    case 'financial-info':
      api = `${baseEndpoints.profile}/${userId}/financial_information`;
      break;
    case 'bank_details':
    case 'liabilities':
    case 'assets':
    case 'insurances':
    case 'investments':
      api = `${baseEndpoints.profile}/financial_base/${category}/${id}`;
      break;
    case 'identification-info':
      api = `${baseEndpoints.profile}/identification_informations/${id}`;
      break;
    case 'realestate-info':
      api = `${baseEndpoints.profile}/real_estate_informations/${id}`;
      break;
    case 'residential-info':
      api = `${baseEndpoints.profile}/residential_histories/${id}`;
      break;
    default:
      api = null;
      break;
  }
  return api;
};

export const getSingleProfileDataPatchUrl = (category, id) => {
  let api = null;
  switch (category) {
    case 'contact-info':
      api = `${baseEndpoints.profiles}/contact_information`;
      break;
    case 'education-info':
      api = `${baseEndpoints.profile}/education_data/${id}`;
      break;
    case 'employment-info':
      api = `${baseEndpoints.profile}/employment_informations/${id}`;
      break;
    case 'personal-info':
      api = `${baseEndpoints.profile}/${id}`;
      break;
    case 'financial-info':
      api = `${baseEndpoints.profile}/financial_informations/${id}`;
      break;
    case 'bank_details':
    case 'liabilities':
    case 'assets':
    case 'insurances':
    case 'investments':
      api = `${baseEndpoints.profile}/financial_base/${category}/${id}`;
      break;
    case 'identification-info':
      api = `${baseEndpoints.profile}/identification_informations/${id}`;
      break;
    case 'realestate-info':
      api = `${baseEndpoints.profile}/real_estate_informations/${id}`;
      break;
    case 'residential-info':
      api = `${baseEndpoints.profile}/residential_histories/${id}`;
      break;
    default:
      api = null;
      break;
  }
  return api;
};
