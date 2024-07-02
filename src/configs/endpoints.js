
/** BASE URL */
export const serverBaseUrl = 'https://vaultkit-1.onrender.com';


export const baseEndpoints = {
  auth: `${serverBaseUrl  }/`,
  profile: `${serverBaseUrl  }/profile`,
  share: `${serverBaseUrl  }/share`,
};



export const authEndpoints = {
  login: `${baseEndpoints.auth  }login`,
  signupUser: `${baseEndpoints.auth  }signup`,
  signupCompany: `${baseEndpoints.auth  }/signin`,
  activate: `${baseEndpoints.auth  }/register/activate`,
  forgotPasswordInitiate: `${baseEndpoints.auth  }/forgot-password/initiate`,
  forgotPasswordComplete: `${baseEndpoints.auth  }/forgot-password/complete`,
  changePassword: `${baseEndpoints.auth  }/change-password`,
  updateProfile: `${baseEndpoints.auth  }/update/profile`,
  updateProfileImage: `${baseEndpoints.auth  }/update/profile/image`,
};

export const sharedDataEndpoint = {
  share: `${baseEndpoints.extractApproval  }/share`,

}
export const profileEndpoint = {
  basic: `${baseEndpoints.profile  }/basic`,
  contact: `${baseEndpoints.profile  }/contact`,
  eduInfo: `${baseEndpoints.profile  }/edu-info`,
  empInfo: `${baseEndpoints.profile  }/emp-info`,
  finInfo: `${baseEndpoints.profile  }/fin-info`,
  idInfo: `${baseEndpoints.profile  }/id-info`,
  reInfo: `${baseEndpoints.profile  }/re-info`,
  resInfo: `${baseEndpoints.profile  }/res-info`,

}

