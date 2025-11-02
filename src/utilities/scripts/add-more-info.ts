import { addImageDefault, addPriceSizeImg } from './add-content'

type add_more_info = {
  items: any[]
  type?: string
}

const addMoreInfo = ({ items, type }: add_more_info) => {
  items.map((el) => {
    switch (type) {
      case 'F':
        el.img = addImageDefault('F')
        el.allImages = addPriceSizeImg('F')
        break
      case 'H':
        el.img = addImageDefault('H')
        el.allImages = addPriceSizeImg('H')
        break
      case 'Q':
        const isRed = el.type == 'red'
        el.img = isRed ? addImageDefault('QR') : addImageDefault('QB')
        el.img = isRed ? addPriceSizeImg('QR') : addPriceSizeImg('QB')
        break
      case 'J':
        break
    }
  })
  return items
}

export { addMoreInfo }
