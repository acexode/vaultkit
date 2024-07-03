import { API } from "src/utils/api";

import { authEndpoints} from "src/configs/endpoints";

// auth apis
export const loginAPI = new API('Login', authEndpoints.login, 'C');
export const signupAPI = new API('Signup', authEndpoints.signup, 'C');


// org structure apis
