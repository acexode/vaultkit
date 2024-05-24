// eslint-disable-next-line import/no-extraneous-dependencies
import { useMutation } from '@tanstack/react-query';

import { instance } from '../config';

export const useLogin = (succssHandler, errorHandler) =>
  useMutation({
    mutationFn: login,
    onSuccess(data) {
      succssHandler?.(data);
    },
    onError(err) {
      errorHandler?.(err.response?.data?.message || 'Error logining in user');
    },
  });

const login = async (obj) => {
  const { data, status } = await instance.post('auth/login', {
    ...obj,
  });
  return { data, status };
};
