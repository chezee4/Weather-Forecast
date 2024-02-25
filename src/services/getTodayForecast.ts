import type { TodayForecastResponseT } from 'src/types'

import api from 'src/config/ky'
import { FetchEndpoint } from 'src/constants'

export const getTodayForecast = async (
  city: string,
): Promise<TodayForecastResponseT> => {
  return api.get(`${city}${FetchEndpoint.TODAY_WEATHER}`).json()
}
