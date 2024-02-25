import { useCountdownTimer } from 'src/features/CountdownTimer/useCountdownTimer'
import { СountdownTimerPropsT } from 'src/features/CountdownTimer/types'
import styles from 'src/features/CountdownTimer/styles.module.css'

export default function CountdownTimer({ startDate }: СountdownTimerPropsT) {
  const { days, hours, minutes, seconds } = useCountdownTimer(startDate)

  return (
    <div className={styles.containerTimer}>
      <div className={styles.timerElement}>
        <span>{days}</span> <span>days</span>
      </div>
      <div className={styles.timerElement}>
        <span>{hours}</span> <span>hours</span>
      </div>
      <div className={styles.timerElement}>
        <span>{minutes}</span> <span>minutes</span>
      </div>
      <div className={styles.timerElement}>
        <span>{seconds}</span> <span>seconds</span>
      </div>
    </div>
  )
}
