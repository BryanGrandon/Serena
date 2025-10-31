import general from '../../../data/general.json' assert { type: 'json' }

const Navigation = () => {
  const navigation = general.navigation

  return (
    <nav className='text-black p-4'>
      <article className='flex w-full items-center justify-between gap-8'>
        <a href={navigation.home.url} className='min-w-fit font-bold'>
          {general.logo}
        </a>
        <section className='flex w-full border border-black rounded-lg overflow-hidden '>
          <input type='text' placeholder='Escribe lo que buscas...' className='py-1 px-2 w-full rounded-l-lg' />
          <a href='#' className=' border-l rounded-r-lg py-1 px-2'>
            Search
          </a>
        </section>
        <button>|||</button>
      </article>
      <article>
        <ul className='flex gap-8 mt-4'>
          {Object.values(navigation).map((navItem) => (
            <li key={navItem.url}>
              <a href={navItem.url} className='hover:underline'>
                {navItem.label}
              </a>
            </li>
          ))}
        </ul>
      </article>
    </nav>
  )
}

export default Navigation
