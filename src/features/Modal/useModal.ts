import { useState } from 'react'
import { formatDate } from 'src/utils'
import { useCitiesStore, useModalStore } from 'src/context'
import { CityImage } from 'src/constants/city'

export const useDateModal = () => {
  const [state, setState] = useState({
    firstDate: '',
    secondDate: '',
    maxSecondDate: '',
    city: '',
  })
  const { isModalOpen, toggleModal } = useModalStore()
  const { addCity } = useCitiesStore()

  const today = new Date()
  const maxDate = new Date()
  maxDate.setDate(today.getDate() + 15)

  const handleFirstDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      const date = new Date(event.target.value)
      date.setDate(date.getDate() + 15)

      setState(prevState => ({
        ...prevState,
        firstDate: event.target.value,
        maxSecondDate: formatDate(date),
      }))
    } else {
      setState(prevState => ({
        ...prevState,
        firstDate: '',
        secondDate: '',
      }))
    }
  }

  const handleSecondDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(prevState => ({
      ...prevState,
      secondDate: event.target.value,
    }))
  }

  const handleAddCity = () => {
    if (!state.city || !state.firstDate || !state.secondDate) return
    addCity({
      name: state.city,
      dataStart: state.firstDate,
      dataFinish: state.secondDate,
      image: CityImage[state.city],
    })
    toggleModal()
  }

  return {
    isModalOpen,
    firstDate: state.firstDate,
    today: formatDate(today),
    maxDate: formatDate(maxDate),
    maxSecondDate: state.maxSecondDate,
    secondDate: state.secondDate,
    city: state.city,
    setCity: (city: string) => setState(prevState => ({ ...prevState, city })),
    toggleModal,
    handleFirstDateChange,
    handleSecondDateChange,
    handleAddCity,
  }
}