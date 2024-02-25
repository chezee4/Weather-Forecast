import { ReactComponent as Add } from 'src/assets/icons/add.svg'
import { useModalStore } from 'src/context'
import styles from 'src/components/TripItemAdd/styles.module.css'

export default function TripItemAdd() {
  const { toggleModal } = useModalStore()
  return (
    <div className={styles.container_add} onClick={toggleModal}>
      <span>
        <Add />
      </span>
      <span>Add Trip</span>
    </div>
  )
}
