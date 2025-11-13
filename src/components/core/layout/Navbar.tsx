import { NAVBAR } from '../../../utilities/constants/navigation'

const Navbar = () => {
  const openMenu = (id: number) => {
    const $menu = document.getElementById(`menu-${id}`)
    $menu?.classList.toggle('opacity-100')
    $menu?.classList.toggle('visible')
  }

  return (
    <header className='text-black bg-white/70 relative'>
      <nav className='p-4 flex flex-col gap-4'>
        <article className='flex w-full items-center justify-between gap-8'>
          <a href='#' className='min-w-fit font-bold'>
            Brisa de Paz
          </a>
          <section className='flex w-full border border-black rounded-lg overflow-hidden '>
            <input type='text' placeholder='Escribe lo que buscas...' className='py-1 px-2 w-full rounded-l-lg' />
            <a href='#' className=' border-l rounded-r-lg py-1 px-2'>
              Search
            </a>
          </section>
          <button>|||</button>
        </article>
      </nav>
      <article>
        {NAVBAR.map((el) => (
          <section key={el.id} className='inline-block relative group mx-4'>
            {el.catalogs && el.catalogs.length > 0 ? (
              <p className={`cursor-pointer duration-150 ease-in-out flex items-center gap-1 p-2 w-fit mobile-${el.id}`} onClick={() => openMenu(el.id)}>
                <span className=''>{el.nav}</span>
                <span>^</span>
              </p>
            ) : (
              <a href={el.url ? el.url : '#'} className='hover:text-secondary transition-colors duration-150 ease-in-out p-2'>
                {el.nav}
              </a>
            )}

            {el.catalogs && el.catalogs.length > 0 ? (
              <article
                id={`menu-${el.id}`}
                className='flex flex-col absolute top-full left-0 bg-white shadow-lg shadow-black/20 rounded-b-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-150 ease-in-out z-10'
              >
                {el.catalogs.map((catalog, index) => (
                  <a href={catalog.url} key={index} className='block py-2 px-4 min-w-fit'>
                    {catalog.name}
                  </a>
                ))}
              </article>
            ) : null}
          </section>
        ))}
      </article>
    </header>
  )
}

export default Navbar
