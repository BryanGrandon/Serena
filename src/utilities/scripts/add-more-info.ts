import { addImageInContent } from './add-image-in-content'

type add_more_info = {
  items: any[]
  type?: string
}

const defaultData = ({ items, type }: add_more_info) => {
  items.map((el) => {
    switch (type) {
      case 'F':
        el.genre = 'Woman'
        break
      case 'H':
        break
      case 'Q':
        break
      case 'J':
        break
    }
  })
}

const addMoreInfo = ({ items, type }: add_more_info) => {
  switch (type) {
    case 'F':
      defaultData({ items, type: 'F' })
      addImageInContent({ items, type: 'F' })
      break
    case 'H':
      addImageInContent({ items, type: 'H' })
      break
    case 'Q':
      addImageInContent({ items, type: 'Q' })
      break
    case 'J':
      break
  }
  return items
}

export { addMoreInfo }
