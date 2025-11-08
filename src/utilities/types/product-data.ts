type product_creams = {
  id: number
  name: string
  inspiration: string
  highlight: string
  brand: string
  area: string[]
  description: string
  img: string
  productData: { size: string; url: string; price: string }[]
  extra: { title: string; description: string }[]
}

type product_perfumes = {
  id: number
  name: string
  inspiration: string
  highlight: string
  olfactory_families: string[]
  brand: string
  genre: string
  description: string
}

export type { product_creams, product_perfumes }
