export const FETCH_WEATER_URL = process.env.REACT_APP_FEATCH_WEATHER_URL
export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY
export const FETCH_CITY_IMAGE_URL = process.env.REACT_APP_FETCH_CITY_IMAGE_URL

export enum CacheKeys {
  Forecast = 'Forecast',
  TodayForecast = 'TodayForecast',
  CityImage = 'CityImage',
}

export const FetchEndpoint = {
  FORECAST: `?unitGroup=metric&include=days&key=${WEATHER_API_KEY}&contentType=json`,
  TODAY_WEATHER: `/today?unitGroup=metric&include=days&key=${WEATHER_API_KEY}&contentType=json`,
}
