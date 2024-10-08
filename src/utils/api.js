/* eslint-disable no-else-return */
import axiosInstance from './axios';
import { Method, getApiOptions, formatResponse, convertToStringParamsObject } from './crud-utils';

const handleError = (error) => {
  console.log(error);
  if (error.response) {
    return {
      status: error.response.status,
      error: {
        name: 'Response Error',
        data: error.response.data,
        message: error.response.data.message || 'An error occurred',
        detail: error.response.data.detail || 'No additional details available',
      },
    };
  } else if (error.request) {
    return {
      status: 0,
      error: {
        name: 'Request Error',
        message: 'No response received from the server',
        detail: 'Please check your network connection and try again',
      },
    };
  } else {
    return {
      status: 0,
      error: {
        name: 'General Error',
        message: error.message,
        detail: 'An unexpected error occurred',
      },
    };
  }
};

export class API {
  constructor(type, url, methods = 'MCRUDP') {
    this._url = url
    if (methods.includes('M')) this[`read${type}s`] = this._readMany.bind(this);
    if (methods.includes('C')) this[`create${type}`] = this._create.bind(this);
    if (methods.includes('R')) this[`read${type}`] = this._read.bind(this);
    if (methods.includes('U')) this[`update${type}`] = this._update.bind(this);
    if (methods.includes('D')) this[`delete${type}`] = this._delete.bind(this);
    if (methods.includes('P')) this[`patch${type}`] = this._patch.bind(this);
  }

  async _readMany(params = {}, extraOptions = {}, extraHeaderOptions = {}) {
    const options = getApiOptions(Method.get, extraOptions, extraHeaderOptions);
    const url = new URL(this._url, axiosInstance.defaults.baseURL);
    url.search = new URLSearchParams(convertToStringParamsObject(params)).toString();

    try {
      const res = await axiosInstance.get(url.toString(), options);
      return formatResponse(res);
    } catch (error) {
      return handleError(error);
    }
  }

  async _create(body, extraOptions = {}) {
    // eslint-disable-next-line no-unused-vars
    const options = getApiOptions(Method.post, {
      // data: JSON.stringify(body),
      ...extraOptions,
    });

    try {
      console.log(body)
      const res = await axiosInstance.post(this._url, body);
      return formatResponse(res);
    } catch (error) {
      return handleError(error);
    }
  }

  async _read(id, extraOptions = {}, extraHeaderOptions = {}) {
    const options = getApiOptions(Method.get, extraOptions, extraHeaderOptions);

    try {
      const res = await axiosInstance.get(`${this._url}/${id}`, options);
      return formatResponse(res);
    } catch (error) {
      return handleError(error);
    }
  }

  async _update(id, body, extraOptions = {}) {
    const options = getApiOptions(Method.put, {
      data: JSON.stringify(body),
      ...extraOptions,
    });

    try {
      const res = await axiosInstance.put(`${this._url}/${id}`, options.data, options);
      return formatResponse(res);
    } catch (error) {
      return handleError(error);
    }
  }

  
  async _patch(id, body, extraOptions = {}) {
    const options = getApiOptions(Method.patch, {
      data: JSON.stringify(body),
      ...extraOptions,
    });

    try {
      const res = await axiosInstance.patch(`${this._url}/${id}`, options.data, options);
      return formatResponse(res);
    } catch (error) {
      return handleError(error);
    }
  }

  async _delete(id, extraOptions = {}) {
    const options = getApiOptions(Method.delete, extraOptions);

    try {
      const res = await axiosInstance.delete(`${this._url}/${id}`, options);
      return formatResponse(res);
    } catch (error) {
      return handleError(error);
    }
  }
}


