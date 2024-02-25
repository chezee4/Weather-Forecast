export type CardItemPropsT = {
  title: string
  image: string
  dataStart: string
  dataFinish: string
  handleClick: (cityName: string, dataStart: string, dataFinish: string) => void
}
