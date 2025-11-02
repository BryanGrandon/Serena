import { PERFUMES_IMG } from '../constants/images'

const addImageDefault = (type: string) => {
  if (type == 'F') return PERFUMES_IMG.women.box
  if (type == 'H') return PERFUMES_IMG.men.box
  if (type == 'QR') return PERFUMES_IMG.niche.red.box
  if (type == 'QB') return PERFUMES_IMG.niche.black.box
}

const addPriceSizeImg = (type: string) => {
  if (type == 'F') {
    return [
      {
        size: '100ml',
        price: '15000',
        url: PERFUMES_IMG.women['100ml'],
      },
      {
        size: '50ml',
        price: '10000',
        url: PERFUMES_IMG.women['50ml'],
      },
      {
        size: '20ml',
        price: '5000',
        url: PERFUMES_IMG.women['20ml'],
      },
    ]
  }
  if (type == 'H') {
    return [
      {
        size: '100ml',
        price: '15000',
        url: PERFUMES_IMG.men['100ml'],
      },
      {
        size: '50ml',
        price: '10000',
        url: PERFUMES_IMG.men['50ml'],
      },
      {
        size: '20ml',
        price: '5000',
        url: PERFUMES_IMG.men['20ml'],
      },
    ]
  }
  if (type == 'QR') {
    return [
      {
        size: '100ml',
        price: '25000',
        url: PERFUMES_IMG.niche.red['100ml'],
      },
    ]
  }
  if (type == 'QB') {
    return [
      {
        size: '100ml',
        price: '25000',
        url: PERFUMES_IMG.niche.black['100ml'],
      },
    ]
  }
}

export { addImageDefault, addPriceSizeImg }
