import { ForecastResponseT } from 'src/types'

import api from 'src/config/ky'
import { FetchEndpoint } from 'src/constants/index'

export const getForecast = async (
  city: string,
  dataStart: string,
  dataFinish: string,
): Promise<ForecastResponseT> => {
  return api
    .get(`${city}/${dataStart}/${dataFinish}${FetchEndpoint.FORECAST}`)
    .json()
}
