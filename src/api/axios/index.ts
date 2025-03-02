import axiosInstance from "./axios";
import { QueryParams } from "../../types/api";
import { AxiosResponse } from "axios";
import qs from "query-string";

const createQueryFromParams = (params: QueryParams | undefined) => {
  let query = "";
  if (params && Object.keys(params).length) {
    query = `?${qs.stringify(params)}`;
  }
  return query;
};

export const api = {
  get: async (url: string, params?: QueryParams): Promise<AxiosResponse> => {
    const query = createQueryFromParams(params);
    const fullUrl = `${url}${query}`;
    return axiosInstance.get(fullUrl);
  },
  post: async (
    url: string,
    data: unknown,
    params?: QueryParams
  ): Promise<AxiosResponse> => {
    const query = createQueryFromParams(params);
    return axiosInstance.post(`${url}${query}`, data);
  },
  put: async (
    url: string,
    data: unknown,
    params?: QueryParams
  ): Promise<AxiosResponse> => {
    const query = createQueryFromParams(params);
    const fullUrl = `${url}${query}`;
    return axiosInstance.put(`${fullUrl}`, data);
  },
  patch: async (
    url: string,
    data: unknown,
    params?: QueryParams
  ): Promise<AxiosResponse> => {
    const query = createQueryFromParams(params);
    const fullUrl = `${url}${query}`;
    return axiosInstance.patch(`${fullUrl}`, data);
  },
  delete: async (
    url: string,
    params?: QueryParams,
    data?: unknown
  ): Promise<AxiosResponse> => {
    const query = createQueryFromParams(params);
    const fullUrl = `${url}${query}`;
    return axiosInstance.delete(fullUrl, { data });
  },
};
