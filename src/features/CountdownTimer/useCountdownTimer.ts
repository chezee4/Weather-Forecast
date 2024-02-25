import { useState, useEffect } from 'react'
import { formatTimeForTimer } from 'src/utils'

export const useCountdownTimer = (startDate: string) => {
  const [timeLeft, setTimeLeft] = useState(
    new Date(startDate).getTime() - Date.now(),
  )
  const times = formatTimeForTimer(timeLeft)
  useEffect(() => {
    const intervalId = setInterval(() => {
        const now = Date.now()
        const timeLeft = Math.max(0, new Date(startDate).getTime() - now)
        if (!timeLeft) {
          clearInterval(intervalId)
        }
        
      setTimeLeft(timeLeft)

    }, 1000)

    return () => clearInterval(intervalId)
  }, [startDate])

  return times
}
