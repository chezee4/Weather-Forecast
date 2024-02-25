import type { CardItemPropsT } from 'src/components/TripItem/types'
import styles from 'src/components/TripItem/styles.module.css'

export default function CityItem({
  title,
  image,
  dataStart,
  dataFinish,
  handleClick,
}: CardItemPropsT) {
  return (
    <div
      onClick={() => handleClick(title, dataStart, dataFinish)}
      className={styles.cityItem}
    >
      <div className={styles.cityImageContainer}>
        <img src={image.toString()} alt={title} className={styles.cityImage} />
      </div>
      <div className={styles.cityContainerText}>
        <h3>{title}</h3>
        <span className={styles.cityData}>
          {dataStart} - {dataFinish}
        </span>
      </div>
    </div>
  )
}
