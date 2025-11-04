import { useStore } from '@nanostores/react'
import { dataFilter, dataSelected } from '../storage/storage-filter'
import { useState } from 'react'

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

  return { newData, filter }
}

export default useFilter
