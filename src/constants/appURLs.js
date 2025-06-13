const BASE_URL = process.env.REACT_APP_BASE_URL;
export const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY;

export const config = {
  headers: {
    ContentType: "application/json",
    accept: "application/json",
  },
};

export const APP_URLs = {
  category:{
    getBusinessList: `${BASE_URL}/mobile/v1/category/ActiveBusinessItemsDetails`,
    getRestaurantById:`${BASE_URL}/mobile/v1/restaurant`,
    getHotelById:`${BASE_URL}/mobile/v1/hotel`,
    getGolfById:`${BASE_URL}/mobile/v1/golf`,
    getWellnessById:`${BASE_URL}/mobile/v1/wellness`
  },
};