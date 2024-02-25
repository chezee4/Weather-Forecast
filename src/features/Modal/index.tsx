import { useDateModal } from 'src/features/Modal/useModal'
import styles from 'src/features/Modal/styles.module.css'
import SelectCity from 'src/components/SelectCity'
import InputData from 'src/components/InputData'

const Modal = () => {
  const {
    isModalOpen,
    firstDate,
    today,
    maxDate,
    maxSecondDate,
    secondDate,
    city,
    setCity,
    toggleModal,
    handleFirstDateChange,
    handleSecondDateChange,
    handleAddCity,
  } = useDateModal()

  return isModalOpen ? (
    <>
      <div className={styles.outside} onClick={toggleModal}></div>
      <div className={styles.modal}>
        <div className={styles.headerModal}>
          <h2 className={styles.titleModal}>Create Trip</h2>
          <button onClick={toggleModal} className={styles.buttonClose}>
            x
          </button>
        </div>
        <div className={styles.bodyModal}>
          <SelectCity city={city} setCity={setCity} />
          <div className={styles.containerInputs}>
            <InputData
              value={firstDate}
              min={today}
              max={maxDate}
              onChange={handleFirstDateChange}
            />
            <InputData
              value={secondDate}
              min={firstDate}
              max={maxSecondDate}
              onChange={handleSecondDateChange}
              disabled={!firstDate}
            />
          </div>
          <button onClick={handleAddCity} className={styles.buttonAdd}>
            Add City
          </button>
        </div>
      </div>
    </>
  ) : null
}

export default Modal
