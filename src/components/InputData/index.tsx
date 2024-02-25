import { InputDataPropsT } from 'src/components/InputData/types'

export default function InputData({
  value,
  onChange,
  disabled = false,
  min,
  max,
}: InputDataPropsT) {
  return (
    <input
      type="date"
      value={value}
      min={min}
      max={max}
      disabled={disabled}
      onChange={onChange}
    />
  )
}
