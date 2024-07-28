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
export const profileAPIs = (id) => {
    const url = `${serverBaseUrl  }/users`;
    const basicUrl = `${serverBaseUrl  }/users/basic_info`;
    const path = profileEndpoint(url, id);
    
    return {
        contactAPI : new API('Contact', path.contact, 'MCRUDP'),
        educationAPI : new API('Education', path.eduInfo, 'MCRUDP'),
        employmentAPI : new API('Employment', path.empInfo, 'MCRUDP'),
        basicAPI : new API('Basic', basicUrl, 'MCRUDP'),
        basicInfoAPI : new API('Basic', path.basic, 'MCRUDP'),
        financialAPI : new API('Financial', path.finInfo, 'MCRUDP'),
        identityAPI : new API('Identity', path.idInfo, 'MCRUDP'),
        realEstateAPI : new API('RealEstate', path.realInfo, 'MCRUDP'),
        residentialHistoryAPI : new API('ResidentialHistory', path.resInfo, 'MCRUDP')
    }
}
export const profileRequestMapper = (category, id) => {
    let api = null;
    const profiles = profileAPIs(id)
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