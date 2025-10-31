import { PERFUMES_IMG } from '../constants/images'

type add_image_in_content = {
  items: any[]
  type?: string
}

const addImageInContent = ({ items, type }: add_image_in_content) => {
  items.map((el) => {
    switch (type) {
      case 'F':
        el.img = PERFUMES_IMG.women.box
        break
      case 'H':
        el.img = PERFUMES_IMG.men.box
        break
      case 'Q':
        el.type === 'red' ? (el.img = PERFUMES_IMG.niche.red.box) : (el.img = PERFUMES_IMG.niche.black.box)
        break
      case 'QB':
        el.img = PERFUMES_IMG.niche.black['100ml']
        break
    }
  })

  return items
}

export { addImageInContent }
