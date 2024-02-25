import { IconsForecast } from 'src/constants/forecastIcons'

export type IconT = keyof typeof IconsForecast

export type ForecastResponseT = {
  address: string
  days: ForecastCondition[]
  timezone: string
}
export type CityImageType = {
  [city: string]: string
}

export type CityT = {
  name: string
  image: string
  dataStart: string
  dataFinish: string
}

export type CitiesStoreT = {
  cities: CityT[]
  filteredCities: CityT[]
  addCity: (city: CityT) => void
  search: string
  setSearch: (search: string) => void
}
export type TodayForecastResponseT = {
  address: string
  days: ForecastTodayT[]
}
export type ForecastTodayT = {
  datetime: string
  temp: number
  icon: IconT
}

export type ForecastCondition = {
  datetime: string
  icon: IconT
  tempmax: number
  tempmin: number
}
