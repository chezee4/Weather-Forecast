import { CityImage } from 'src/constants/city'
import { SelectCityPropsT } from 'src/components/SelectCity/types'
import styles from 'src/components/SelectCity/styles.module.css'

export default function SelectCity({ city, setCity }: SelectCityPropsT) {
  return (
    <select
      value={city}
      onChange={e => setCity(e.target.value)}
      className={styles.selectCity}
    >
      <option value="" disabled>
        Please select a City
      </option>
      {Object.keys(CityImage).map(cityName => (
        <option value={cityName} key={cityName}>
          {cityName}
        </option>
      ))}
    </select>
  )
}
