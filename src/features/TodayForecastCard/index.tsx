import ForecastIcon from 'src/components/ForecastIcon'
import CountdownTimer from 'src/features/CountdownTimer'

import { useTodayForecastStore } from 'src/context'
import { getFromSessionStorage } from 'src/utils'
import styles from 'src/features/TodayForecastCard/styles.module.css'

export default function TodayForecastCard() {
  const { todayForecastData } = useTodayForecastStore()
  const startDate = getFromSessionStorage('tripStartDate')
  return (
    <>
      {todayForecastData && (
        <div className={styles.card}>
          <div className={styles.details}>
            <h4 className={styles.day}>
              {new Date(todayForecastData.days[0].datetime).toLocaleDateString(
                'en-US',
                {
                  weekday: 'long',
                },
              )}
            </h4>
            <div className={styles.containerTemp}>
              <ForecastIcon icon={todayForecastData.days[0].icon} />
              <p className={styles.textTemp}>
                {todayForecastData.days[0].temp.toFixed()}
              </p>
            </div>
            <p className={styles.city}>{todayForecastData.address}</p>
            <CountdownTimer startDate={startDate} />
          </div>
        </div>
      )}
    </>
  )
}
