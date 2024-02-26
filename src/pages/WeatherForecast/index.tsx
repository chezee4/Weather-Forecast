import { useNavigate } from 'react-router-dom'
import { SignOutButton, SignedIn, useUser } from '@clerk/clerk-react'

import ListResponseGetForecast from 'src/features/ForecastList'
import TripList from 'src/features/TripList'
import InputSearch from 'src/components/InputSearch'
import Modal from 'src/features/Modal'
import TodayForecastCard from 'src/features/TodayForecastCard'

import styles from 'src/pages/WeatherForecast/styles.module.css'

export default function WeatherForecast() {
  const { isSignedIn } = useUser()
  const navigate = useNavigate()

  if (!isSignedIn) {
    navigate('/sign-in')
  }

  return (
    <div className="App">
      <SignedIn>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div>
              <h1 className={styles.title}>
                <span>Forecast</span> <span>Forecast</span>
              </h1>
              <SignOutButton />
            </div>
            <InputSearch />
          </div>
          <div className={styles.bodyApp}>
            <div>
              <TripList />
              <ListResponseGetForecast />
              <Modal />
            </div>
            <TodayForecastCard />
          </div>
        </div>
      </SignedIn>
    </div>
  )
}
