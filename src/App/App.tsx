import ListResponseGetForecast from 'src/features/ForecastList'
import TripList from 'src/features/TripList'
import InputSearch from '../components/InputSearch'
import Modal from '../features/Modal'
import styles from 'src/App/styles.module.css'
import TodayForecastCard from 'src/features/TodayForecastCard'

function App() {
  return (
    <div className="App">
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span>Forecast</span> <span>Forecast</span>
          </h1>
          <InputSearch />
        </div>
        <div className={styles.bodyApp}>
          <div style={{ display: 'inline-block' }}>
            <TripList />
            <ListResponseGetForecast />
            <Modal />
          </div>
          <TodayForecastCard />
        </div>
      </div>
    </div>
  )
}

export default App
