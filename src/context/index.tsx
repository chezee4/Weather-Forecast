import { create } from 'zustand'

import { getForecast } from 'src/services/getForecast'
import { getTodayForecast } from 'src/services/getTodayForecast'

import { ForecastTodayState, ModalState, ForecastState } from 'src/context/types'
import { ForecastResponseT, CitiesStoreT, CityT } from 'src/types'
import { cities } from 'src/constants/city'
import {
  setToLocalStorage,
  getFromLocalStorage,
  setToSessionStorage,
} from 'src/utils'

export const useModalStore = create<ModalState>(set => ({
  isModalOpen: false,
  toggleModal: () => set(state => ({ isModalOpen: !state.isModalOpen })),
}))

export const useForecastStore = create<ForecastState>((set, get) => ({
  forecastData: {} as ForecastResponseT,
  isLoading: false,
  error: null,
  fetchCache: {},
  fetchForecastData: async (city, dataStart, dataFinish) => {
    const cacheKey = `${city}-${dataStart}-${dataFinish}`
    setToSessionStorage('tripStartDate', dataStart)
    if (get().fetchCache[cacheKey]) {
      set({ forecastData: get().fetchCache[cacheKey] })
      return
    }
    set({ isLoading: true, error: null })
    try {
      const forecast = await getForecast(city, dataStart, dataFinish)
      set(state => ({
        forecastData: forecast,
        isLoading: false,
        fetchCache: {
          ...state.fetchCache,
          [cacheKey]: forecast,
        },
      }))
    } catch (error) {
      set({ error, isLoading: false })
    }
  },
}))

export const useTodayForecastStore = create<ForecastTodayState>(set => ({
  todayForecastData: null,
  isLoading: false,
  error: null,
  fetchTodayForecastData: async city => {
    set({ isLoading: true, error: null })
    try {
      const todayForecast = await getTodayForecast(city)
      set({ todayForecastData: todayForecast, isLoading: false })
    } catch (error) {
      set({ error, isLoading: false })
    }
  },
}))

export const useCitiesStore = create<CitiesStoreT>((set, get) => ({
  cities: getFromLocalStorage('cities') || cities,
  search: '',
  filteredCities: (getFromLocalStorage<CityT[]>('cities') || cities).sort(
    (a, b) => new Date(a.dataStart).getTime() - new Date(b.dataStart).getTime(),
  ),
  addCity: city =>
    set(state => {
      const newCities = [...state.cities, city].sort(
        (a, b) => new Date(a.dataStart).getTime() - new Date(b.dataStart).getTime(),
      )
      setToLocalStorage('cities', newCities)
      return { cities: newCities, filteredCities: newCities }
    }),
  setSearch: search =>
    set(state => {
      const filteredCities = state.cities.filter(city =>
        city.name.toLowerCase().includes(search.toLowerCase()),
      )
      return { search: search, filteredCities: filteredCities }
    }),
}))
