import { APP_URLs, config } from "../constants/appURLs";
import httpsClient from "./httpsClient";

export const getBusinessLists = async (query) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await httpsClient.get(
    `${APP_URLs.category.getBusinessList}?${queryString}`,
    config
  );
  return data;
};

export const getBusinessDetails = async (url,businessId) => {
  const { data } = await httpsClient.get(
    `${url}/${businessId}`,
    config
  );
  return data;
};