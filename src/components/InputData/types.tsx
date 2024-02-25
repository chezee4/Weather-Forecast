export type InputDataPropsT = {
  value: string
  min: string
  max: string
  disabled?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
