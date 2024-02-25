import berlin from 'src/assets/city/berlin.jpg'
import barcelona from 'src/assets/city/barcelona.jpg'
import tokyo from 'src/assets/city/tokyo.jpg'
import { CityImageType } from 'src/types'

export const CityImage: CityImageType = {
  Berlin: berlin,
  Barcelona: barcelona,
  Tokyo: tokyo,
}

export const cities = [
  {
    name: 'Berlin',
    image: CityImage.Berlin,
    dataStart: '2024-02-29',
    dataFinish: '2024-03-01',
  },
  {
    name: 'Barcelona',
    image: CityImage.Barcelona,
    dataStart: '2024-03-01',
    dataFinish: '2024-03-04',
  },
  {
    name: 'Tokio',
    image: CityImage.Tokyo,
    dataStart: '2024-03-01',
    dataFinish: '2024-03-03',
  },
]
