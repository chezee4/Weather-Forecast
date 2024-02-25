import { useEffect } from 'react'
import { useForecastStore, useCitiesStore, useTodayForecastStore } from 'src/context'

export const useTripList = () => {
  const { fetchForecastData } = useForecastStore()
  const { filteredCities } = useCitiesStore()
  const { fetchTodayForecastData } = useTodayForecastStore()

  useEffect(() => {
    fetchForecastData(
      filteredCities[0].name,
      filteredCities[0].dataStart,
      filteredCities[0].dataFinish,
    )
    fetchTodayForecastData(filteredCities[0].name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = (title: string, dataStart: string, dataFinish: string) => {
    fetchForecastData(title, dataStart, dataFinish)
    fetchTodayForecastData(title)
  }

  return { cities: filteredCities, handleClick }
}
