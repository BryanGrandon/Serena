type Props = {
  data: any[]
  type?: string
}

const DynamicContent = ({ data, type }: Props) => {
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
            <a
              href={type + '_' + el?.name.toLowerCase().split(' ').join('-')}
              key={el?.name}
              className='flex flex-row items-center rounded-xl overflow-hidden bg-white/45 shadow-lg shadow-black/20 text-black hover:scale-[1.02] transition-transform duration-150 ease-in-out cursor-pointer'
            >
              <img src={el?.img} className='h-20' alt={`img-${el?.name}`} />
              <section className='relative overflow-hidden px-4'>
                <p className='flex flex-col text-xl'>{el?.name}</p>
                <abbr title={el?.inspiration} className='no-underline'>
                  <sub className='text-gray-600'>inspiration</sub>
                  <h3 className='overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer '>{el?.inspiration}</h3>
                </abbr>
              </section>
            </a>
          ))}
        </article>
      </article>
    </>
  )
}

export default DynamicContent
