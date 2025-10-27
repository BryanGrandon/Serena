type Props = {
  data: any[]
  type?: string
}

import general from '../../../data/general.json'

const DynamicContent = ({ data, type }: Props) => {
  let img = ''
  if (type == 'perfumes-for-women') img = general.perfums_img.ladies['100ml']
  if (type == 'perfumes-for-men') img = general.perfums_img.gentlemen['100ml']

  return (
    <>
      <aside style={{ gridArea: 'aside' }} className='text-black min-w-60 p-4 bg-[#f5e1af] rounded-r-3xl shadow-lg shadow-black/20'>
        Filter
        <details>
          <summary className='cursor-pointer'>Genero</summary>
          <article className='flex flex-col'>
            <label className='flex items-center gap-2'>
              <input type='checkbox' />
              Femenino
            </label>
            <label>
              <input type='checkbox' />
              Masculino
            </label>
          </article>
        </details>
      </aside>

      <article style={{ gridArea: 'content' }} className='p-4 '>
        <article className='grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-4'>
          {data.map((el) => (
            <section className='flex flex-row items-center rounded-xl overflow-hidden bg-white/45 shadow-lg shadow-black/20 text-black'>
              <img src={img} className='h-20' alt='' />
              <section className='relative overflow-hidden px-4'>
                <p className='flex flex-col text-xl'>{el.name}</p>
                <abbr title={el.inspiration} className='no-underline'>
                  <sub className='text-gray-500'>inspiration</sub>
                  <h3 className='overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer '>{el.inspiration}</h3>
                </abbr>
              </section>
            </section>
          ))}
        </article>
      </article>
    </>
  )
}

export default DynamicContent
