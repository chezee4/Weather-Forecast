import ForecastIcon from 'src/components/ForecastIcon'

import { ForecastCardPropsT } from 'src/components/ForecastCard/types'
import styles from 'src/components/ForecastCard/styles.module.css'

export default function ForecastCard({ day }: ForecastCardPropsT) {
  return (
    <div className={styles.box}>
      <h3 className={styles.day}>
        {new Date(day.datetime).toLocaleDateString('en-US', {
          weekday: 'long',
        })}
      </h3>
       <div className={styles.weatherIcon}>
       <ForecastIcon icon={day.icon} />
       </div>
      <p className={styles.textTemp}>
        <span className={styles.high}>{day.tempmax.toFixed()}</span>/
        <span className={styles.low}>{day.tempmin.toFixed()}</span>
      </p>
    </div>
  )
}
