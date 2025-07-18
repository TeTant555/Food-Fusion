import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import axios from "axios";

export const addLogin = {
  useMutation: (
    opt?: Partial<UseMutationOptions<LoginType, Error, AddLoginType>>
  ) => {
    return useMutation<LoginType, Error, AddLoginType>({
      mutationFn: async (login) => {
        const request = await axios.post(`login`, login);
        return request.data.data;
      },
      ...opt,
    });
  },
};

export const addRegister = {
  useMutation: (
    opt?: Partial<UseMutationOptions<RegisterType, Error, AddRegisterType>>
  ) => {
    return useMutation<RegisterType, Error, AddRegisterType>({
      mutationFn: async (register) => {
        const request = await axios.post(`register`, register);
        return request.data.data;
      },
      ...opt,
    });
  },
};
