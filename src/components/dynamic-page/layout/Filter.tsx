import { useEffect, useState } from 'react'
import useFilter from '../../../utilities/hooks/useFilter'

type Props = {
  data: any[]
}

const Filter = ({ data }: Props) => {
  const { filter } = useFilter()

  useEffect(() => {
    filter.setData(data)
  }, [])

  const getFamily = () => {
    const newSet = new Set<string>()
    data.map((el) => {
      el.olfactory_families.map((item: string) => newSet.add(item))
    })
    newSet.add('todos')
    return [...newSet]
  }

  const content = [
    {
      type: 'genero',
      data: ['femenino', 'masculino', 'todos'],
    },
    {
      type: 'familias olfativas',
      data: getFamily(),
    },
  ]

  return (
    <aside style={{ gridArea: 'aside' }} className='text-black min-w-60 p-4 bg-[#f5e1af] rounded-r-3xl shadow-lg shadow-black/20'>
      Filter
      {content.map((el) => (
        <details key={el.type} className=''>
          <summary className='cursor-pointer'>{el.type}</summary>
          <article>
            {el.data.map((item) => (
              <label className='flex gap-2'>
                <input type='radio' name='filter' className='cursor-pointer flex items-center gap-2 capitalize' onClick={() => filter.setOption(el.type, item)} />
                {item}
              </label>
            ))}
          </article>
        </details>
      ))}
    </aside>
  )
}

export default Filter
