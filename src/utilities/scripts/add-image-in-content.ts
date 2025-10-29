import { PERFUMES_IMG } from '../constants/images'

type add_image_in_content = {
  items: any[]
  type?: string
}

const addImageInContent = ({ items, type }: add_image_in_content) => {
  items.map((el) => {
    switch (type) {
      case 'F':
        el.img = PERFUMES_IMG.women['100ml']
        break
      case 'H':
        el.img = PERFUMES_IMG.men['100ml']
        break
      case 'Q':
        el.type === 'red' ? (el.img = PERFUMES_IMG.niche.red['100ml']) : (el.img = PERFUMES_IMG.niche.black['100ml'])
        break
      case 'QB':
        el.img = PERFUMES_IMG.niche.black['100ml']
        break
    }
  })

  return items
}

export { addImageInContent }
