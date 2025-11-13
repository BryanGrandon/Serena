import type { product_creams, product_perfumes } from '../types/product-data'

const getFamily = (data: product_perfumes[]) => {
  const newSet = new Set<string>()
  data.map((el) => el.olfactory_families.map((item: string) => newSet.add(item)))
  newSet.add('todos')
  return [...newSet]
}

const getGenres = (data: product_perfumes[]) => {
  const newSet = new Set<string>()
  data.map((el) => newSet.add(el.genre == 'Woman' ? 'femenino' : 'masculino'))
  newSet.add('todos')
  return [...newSet]
}

const getBrandReference = (data: product_creams[]) => {
  const newSet = new Set<string>()
  data.map((el) => newSet.add(el.context.brand))
  newSet.add('todos')
  return [...newSet].sort()
}

// Creams

const getBrands = (data: product_creams[]) => {
  const newSet = new Set<string>()
  data.map((el) => newSet.add(el.brand))
  newSet.add('todos')
  return [...newSet]
}

const getArea = (data: product_creams[]) => {
  const newSet = new Set<string>()
  data.map((el) => el.area.map((item: string) => newSet.add(item)))
  newSet.add('todos')
  return [...newSet]
}

export { getFamily, getGenres, getBrands, getArea, getBrandReference }
