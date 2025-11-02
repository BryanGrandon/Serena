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
        el.allImages = [
          {
            name: 'box',
            url: PERFUMES_IMG.women.box,
          },
          {
            name: '100ml',
            url: PERFUMES_IMG.women['100ml'],
          },
          {
            name: '50ml',
            url: PERFUMES_IMG.women['50ml'],
          },
          {
            name: '20ml',
            url: PERFUMES_IMG.women['20ml'],
          },
        ]
        el.size = ['100ml', '50ml', '20ml']
        break
      case 'H':
        el.img = PERFUMES_IMG.men.box
        el.allImages = [
          {
            name: 'box',
            url: PERFUMES_IMG.men.box,
          },
          {
            name: '100ml',
            url: PERFUMES_IMG.men['100ml'],
          },
          {
            name: '50ml',
            url: PERFUMES_IMG.men['50ml'],
          },
          {
            name: '20ml',
            url: PERFUMES_IMG.men['20ml'],
          },
        ]
        el.size = ['100ml', '50ml', '20ml']
        break
      case 'Q':
        const isRed = el.type === 'red'
        isRed ? (el.img = PERFUMES_IMG.niche.red.box) : (el.img = PERFUMES_IMG.niche.black.box)
        el.allImages = isRed
          ? [
              {
                name: 'box',
                url: PERFUMES_IMG.niche.red.box,
              },
              {
                name: '100ml',
                url: PERFUMES_IMG.niche.red['100ml'],
              },
            ]
          : [
              {
                name: 'box',
                url: PERFUMES_IMG.niche.black.box,
              },
              {
                name: '100ml',
                url: PERFUMES_IMG.niche.black['100ml'],
              },
            ]
        el.size = ['100ml']
        break
    }
  })

  return items
}

export { addImageInContent }
