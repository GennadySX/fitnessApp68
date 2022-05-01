/*
 * @author GennadySX
 * @created at 2022
 **/

import { Product } from '@reducers/entities/Product/product.types'
import { Assets } from '@constants/Icons/Assets'

export const ProductsMock: Product[] = [
  {
    hour: '7:00',
    dayTime: 'Завтрак',
    contains: '370 / 11 / 20 / 77',
    description: 'Яичница-глазунья с хлебцами',
    imgUri:
      'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    hour: '10:00',
    dayTime: 'Ланч',
    contains: '52 / 30 / 1 / 23',
    description: 'Грейпфрут и чай без сахара',
    imgUri:
      'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    hour: '13:00',
    dayTime: 'Обед',
    contains: '370 / 30 / 50 / 77',
    description: 'Палтус с гречкой в йогурте',
    imgUri:
      'https://images.pexels.com/photos/5865239/pexels-photo-5865239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    hour: '15:00',
    dayTime: 'Полдник',
    contains: '370 / 30 / 50 / 77',
    description: 'Яичница-глазунья с хлебцами',
    imgUri:
      'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    hour: '18:00',
    dayTime: 'Ужин',
    contains: '52 / 30 / 1 / 23',
    description: 'Грейпфрут и чай без сахара',
    imgUri:
      'https://images.pexels.com/photos/90893/pexels-photo-90893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
]

export const ProductItems = [
  {
    img: Assets.eggs,
    name: 'Яйца куриные',
    contain: '2 шт.',
  },
  {
    img: Assets.tomatoes,
    name: 'Помидоры черри',
    contain: '2 - 3 шт.',
  },
  {
    img: Assets.curd,
    name: 'Товорожный сыр',
    contain: '50 г.',
  },
  {
    img: Assets.loaves,
    name: 'Хлебцы',
    contain: '1 - 2 шт.',
  },
]

export const ProductContainsMock = [
  {
    name: 'Ккал',
    value: '370',
  },
  {
    name: 'Белки',
    value: '11 г.',
  },
  {
    name: 'Жиры',
    value: '20 г.',
  },
  {
    name: 'Углеводы',
    value: '370 г.',
  },
]
