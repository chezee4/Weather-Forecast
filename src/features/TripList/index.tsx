import CityItem from 'src/components/TripItem'
import { useTripList } from 'src/features/TripList/useTripList'
import TripItemAdd from '../../components/TripItemAdd'
import styles from 'src/features/TripList/styles.module.css'

export default function TripList() {
  const { cities, handleClick } = useTripList()
  return (
    <div className={styles.flexContainer}>
      <div className={`${styles.cityList} ${styles['scroll-trip']}`}>
        {cities.map((city, index) => (
          <CityItem
            key={index}
            title={city.name}
            dataStart={city.dataStart}
            dataFinish={city.dataFinish}
            image={city.image}
            handleClick={handleClick}
          />
        ))}
      </div>
      <TripItemAdd />
    </div>
  )
}
