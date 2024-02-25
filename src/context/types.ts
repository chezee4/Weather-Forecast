import { ForecastResponseT, TodayForecastResponseT } from 'src/types'

 type EventHandlersT = {
  isLoading: boolean
  error: Error | null | unknown
}
export type ModalState = {
  isModalOpen: boolean
  toggleModal: () => void
}

export type ForecastTodayState = EventHandlersT & {
  todayForecastData: TodayForecastResponseT | null
  fetchTodayForecastData: (city: string) => void
}

export type ForecastState = EventHandlersT & {
    forecastData: ForecastResponseT
    fetchForecastData: (city: string, dataStart: string, dataFinish: string) => void
    fetchCache: Record<string, ForecastResponseT>
}
