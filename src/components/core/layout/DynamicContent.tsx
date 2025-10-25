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
    <article style={{ gridArea: 'content' }} className='bg-green-600'>
      <article className='grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-4'>
        {data.map((el) => (
          <section className='test flex flex-row items-center rounded-xl overflow-hidden '>
            <img src={img} className='h-20' alt='' />
            <section className='relative overflow-hidden px-4'>
              <p className='flex flex-col text-xl'>{el.name}</p>
              <abbr title={el.inspiration} className='no-underline'>
                <sub>inspiration</sub>
                <h3 className='overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer '>{el.inspiration}</h3>
              </abbr>
            </section>
          </section>
        ))}
      </article>
    </article>
  )
}

export default DynamicContent
