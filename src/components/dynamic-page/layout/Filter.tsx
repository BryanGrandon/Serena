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
    <aside style={{ gridArea: 'aside' }} className='text-black min-w-60 p-4 bg-white/40 border border-gray-400 rounded-r-3xl shadow-lg shadow-black/20 flex flex-col gap-2'>
      <h2 className='font-basicaline text-2xl tracking-wider'>Filter</h2>
      {content.map((el) => (
        <fieldset key={el.type} className='border test'>
          <legend className='cursor-pointer font-basicaline text-xl px-0.5 capitalize'>{el.type}</legend>
          <article className='px-2'>
            {el.data.map((item) => (
              <label className='flex gap-2'>
                <input type='radio' name='filter' className='cursor-pointer flex items-center gap-2 capitalize' onClick={() => filter.setOption(el.type, item)} />
                {item}
              </label>
            ))}
          </article>
        </fieldset>
      ))}
    </aside>
  )
}

export default Filter
