/* eslint-disable prefer-destructuring */
export const convertToStringParamsObject = (object = {}) => {
  if (typeof object !== 'object') return {};

  const strParamsObject = {};

  Object.entries(object).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      strParamsObject[key] = value.toString();
    }
  });

  return strParamsObject;
};

export const getErrorMessage = (error) => {
  if (error instanceof Error) return error.message;
  return String(error);
};

export const formatResponse = async (response) => {
  let data;
  if (response.status === 204) {
    data = 'Successfully deleted';
  } else {
    try {
      data = response.data;
    } catch (error) {
      return {
        status: 0,
        data: {
          name: 'Client Error',
          message: getErrorMessage(error),
          detail: getErrorMessage(error),
        },
      };
    }
  }
  console.log(data.data);
  return { status: response.status, data: data.data };
};

export const Method = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
};

export const getApiOptions = (method, extraOptions = {}, extraHeaderOptions = {}) => ({
  method,
  mode: 'cors',
  credentials: 'include',
  headers: { ...extraHeaderOptions, 'Content-Type': 'application/json; charset=UTF-8' },
  ...extraOptions,
});


