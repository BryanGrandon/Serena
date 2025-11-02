import { PERFUMES_IMG } from '../constants/images'

const addImageDefault = (type: string) => {
  if (type == 'F') return PERFUMES_IMG.women.box
  if (type == 'H') return PERFUMES_IMG.men.box
  if (type == 'QR') return PERFUMES_IMG.niche.red.box
  if (type == 'QB') return PERFUMES_IMG.niche.black.box
}

const addPriceSizeImg = (type: string) => {
  if (type == 'F' || type == 'H') {
    return [
      {
        size: '100ml',
        price: '15000',
        url: type == 'F' ? PERFUMES_IMG.women['100ml'] : PERFUMES_IMG.men['100ml'],
      },
      {
        size: '50ml',
        price: '10000',
        url: type == 'F' ? PERFUMES_IMG.women['50ml'] : PERFUMES_IMG.men['50ml'],
      },
      {
        size: '20ml',
        price: '5000',
        url: type == 'F' ? PERFUMES_IMG.women['20ml'] : PERFUMES_IMG.men['20ml'],
      },
    ]
  }
  if (type == 'QR' || type == 'QB') {
    return [
      {
        size: '100ml',
        price: '25000',
        url: type == 'QR' ? PERFUMES_IMG.niche.red['100ml'] : PERFUMES_IMG.niche.black['100ml'],
      },
    ]
  }
}

const addPriceSizeJ = (arr: any[]) => {
  arr.map((el) => {
    el.size = '50ml'
    el.price = '5000'
  })
  return arr
}

export { addImageDefault, addPriceSizeImg, addPriceSizeJ }
