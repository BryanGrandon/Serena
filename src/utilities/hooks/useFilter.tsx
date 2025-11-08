import { useStore } from '@nanostores/react'
import { dataFilter, dataSelected } from '../storage/storage-filter'
import { useState } from 'react'
import { getArea, getBrands, getFamily, getGenres } from '../scripts/get-filter-option'

const useFilter = () => {
  const [newData, setNewData] = useState<any[]>([])
  const main = useStore(dataSelected)

  const filter = {
    setOption: (type: string, value: string) => {
      getNewData(type, value)
    },
    setData: (value: any[]) => {
      setNewData(value)
      dataFilter.set(value)
      dataSelected.set(value)
    },
  }

  const getNewData = (type: string, option: string) => {
    if (option == 'todos') {
      dataFilter.set(main)
      return
    }
    if (type == 'genero') {
      const genre = option == 'femenino' ? 'Woman' : 'Men'
      const newData = main.filter((el) => el.genre == genre)
      dataFilter.set(newData)
    }
    if (type == 'familias olfativas') {
      const newData = main.filter((el) => el.olfactory_families.includes(option))
      dataFilter.set(newData)
    }
  }

  const getContentFilter = (data: any[], type: string) => {
    if (type == 'creams') {
      return [
        { type: 'Marca', data: getBrands(data) },
        { type: 'Area', data: getArea(data) },
      ]
    } else {
      return [
        { type: 'genero', data: getGenres(data) },
        { type: 'familias olfativas', data: getFamily(data) },
      ]
    }
  }

  return { newData, filter, getContentFilter }
}

export default useFilter
