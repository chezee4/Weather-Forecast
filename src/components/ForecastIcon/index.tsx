import { ForecastIconPropsT } from 'src/components/ForecastIcon/types'

import { IconsForecast } from 'src/constants/forecastIcons'
import styles from 'src/components/ForecastIcon/styles.module.css'

export default function ForecastIcon({ icon }: ForecastIconPropsT) {
  const Icon = IconsForecast[icon]
  return (
    <div className={styles.containerIcon}>
      <Icon />
    </div>
  )
}
