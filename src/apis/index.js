import { API } from "src/utils/api";

import { authEndpoints, profileEndpoint} from "src/configs/endpoints";

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

export const profileRequestMapper = (category) => {
    let api = null;
    switch (category) {
        case 'contact-info':
            api = contactAPI
            break;
        case 'education-info':
            api = educationAPI
            break;
        case 'employment-info':
            api = employmentAPI
            break;
        case 'personal-info':
            api = basicAPI
            break;
        case 'financial-info':
            api = financialAPI
            break;
        case 'identification-info':
            api = identityAPI
            break;
        case 'realestate-info':
            api = realEstateAPI
            break;
        case 'residential-info':
            api = residentialHistoryAPI
            break;
        default:
            api = null;
            break;
    }
    return api
}