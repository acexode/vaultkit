import { API } from "src/utils/api";

import { authEndpoints, serverBaseUrl, profileEndpoint} from "src/configs/endpoints";

// auth apis
export const loginAPI = new API('Login', authEndpoints.login, 'C');
export const signupAPI = new API('Signup', authEndpoints.signup, 'C');


// profile apis
export const contactAPI = new API('Contact', profileEndpoint.contact, 'MCRUDP');
export const educationAPI = new API('Education', profileEndpoint.eduInfo, 'MCRUDP');
export const employmentAPI = new API('Employment', profileEndpoint.empInfo, 'MCRUDP');
export const basicAPI = new API('Basic', profileEndpoint.basic, 'MCRUDP');
export const financialAPI = new API('Financial', profileEndpoint.finInfo, 'MCRUDP');
export const identityAPI = new API('Identity', profileEndpoint.idInfo, 'MCRUDP');
export const realEstateAPI = new API('RealEstate', profileEndpoint.realInfo, 'MCRUDP');
export const residentialHistoryAPI = new API('ResidentialHistory', profileEndpoint.resInfo, 'MCRUDP');
// eslint-disable-next-line arrow-body-style
export const profileAPIs = (userId, fin_info_id, category) => {
    const url = `${serverBaseUrl  }/users`;
    const basicUrl = `${serverBaseUrl  }/users/basic_information`;
    const financeUrl = `${serverBaseUrl  }/users/financial_informations/${fin_info_id}/financial_base/${category}`;
    const finInfoUrl = `${serverBaseUrl  }/users/${userId}/financial_information`;
    const path = profileEndpoint(url, userId);
    
    return {
        contactAPI : new API('Contact', path.contact, 'MCRUDP'),
        educationAPI : new API('Education', path.eduInfo, 'MCRUDP'),
        employmentAPI : new API('Employment', path.empInfo, 'MCRUDP'),
        basicAPI : new API('Basic', basicUrl, 'MCRUDP'),
        basicInfoAPI : new API('Basic', path.basic, 'MCRUDP'),
        financialAPI : new API('Financial', financeUrl, 'MCRUDP'),
        finInfoAPI : new API('Financial', finInfoUrl, 'MCRUDP'),
        identityAPI : new API('Identity', path.idInfo, 'MCRUDP'),
        realEstateAPI : new API('RealEstate', path.realInfo, 'MCRUDP'),
        residentialHistoryAPI : new API('ResidentialHistory', path.resInfo, 'MCRUDP')
    }
}
export const profileRequestMapper = (category, userId, fin_info_id) => {
    let api = null;
    const profiles = profileAPIs(userId, fin_info_id, category)
    console.log(category);
    switch (category) {
        case 'contact-info':
            api = profiles.contactAPI
            break;
        case 'education-info':
            api = profiles.educationAPI
            break;
        case 'employment-info':
            api = profiles.employmentAPI
            break;
        case 'personal-info':
            api = profiles.basicAPI
            break;
        case 'financial-info':
            api = profiles.finInfoAPI
            break;
        case 'bank_details':
        case 'liabilities':
        case 'assets':
        case 'insurances':
        case 'investments':
            api = profiles.financialAPI
            break;
        case 'identification-info':
            api = profiles.identityAPI
            break;
        case 'realestate-info':
            api = profiles.realEstateAPI
            break;
        case 'residential-info':
            api = profiles.residentialHistoryAPI
            break;
        default:
            api = null;
            break;
    }
    return api
}

export const getFinanceType = (tag) =>{
    let path = ''

    switch (tag) {
        case 'assets':
            path = 'assets'
            break;
        case 'insurances':
            path = 'insurances'
            break;
        case 'investments':
            path = 'investment'
            break;
        case 'liabilities':
            path = 'liabilities'
            break;
        case 'bank_details':
            path = 'bank_detail'
            break;
        default:
            path = null;
            break;
    }
    return path
}
