import ForecastCard from 'src/components/ForecastCard'
import { useForecastStore } from 'src/context'

import styles from 'src/features/ForecastList/styles.module.css'

export default function ListResponseGetForecast() {
  const { forecastData } = useForecastStore()
  return (
    <div className={styles.flexContainer}>
      {forecastData?.days?.map((day, index) => (
        <ForecastCard key={index} day={day} />
      ))}
    </div>
  )
}
