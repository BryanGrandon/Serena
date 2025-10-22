import general from '../../../data/general.json' assert { type: 'json' }

const Navigation = () => {
  const navigation = general.navigation

  const list = [
    { id: 1, name: navigation.home.label, href: navigation.home.url },
    { id: 2, name: navigation.perfumes.label, href: navigation.perfumes.url },
    { id: 3, name: navigation.colonies.label, href: navigation.colonies.url },
    { id: 4, name: navigation.creams.label, href: navigation.creams.url },
  ]

  console.log(general.perfumes.ladies.box)

  return (
    <nav className='w-full flex items-center justify-between p-4'>
      <a href={navigation.home.url}>{general.logo}</a>
      <section className='flex gap-5'>
        {list.map((item) => (
          <a key={item.id} href={item.href} className='hover:text-primary'>
            {item.name}
            <img src={general.perfumes.ladies.box} alt='s' />
          </a>
        ))}
      </section>
    </nav>
  )
}

export default Navigation
