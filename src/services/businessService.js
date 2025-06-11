import { APP_URLs, config } from "../constants/appURLs";
import httpsClient from "./httpsClient";

export const getBusinessLists = async (query) => {
  try {
    const queryString = new URLSearchParams(query).toString();
    const { data } = await httpsClient.get(
      `${APP_URLs.category.getBusinessList}?${queryString}`,
      config
    );
    return data;
  } catch (error) {
    //snackActions.dismissibleError(error?.message ?? "Something went wrong");
  }
};