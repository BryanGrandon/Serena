const LINK_TO_PERFUMES_FOR_YOUNG_PEOPLE = '/perfumes-for-young-people'
const LINK_TO_PERFUMES_FOR_WOMEN = '/perfumes-for-women'
const LINK_TO_PERFUMES_FOR_MEN = '/perfumes-for-men'
const LINK_TO_NICHE_PERFUMES = '/niche-perfumes'

export { LINK_TO_PERFUMES_FOR_YOUNG_PEOPLE, LINK_TO_PERFUMES_FOR_WOMEN, LINK_TO_PERFUMES_FOR_MEN, LINK_TO_NICHE_PERFUMES }

const NAVBAR = [
  {
    id: 1,
    nav: 'Home',
    name: 'Brisa de Paz',
    url: '/',
  },
  {
    id: 2,
    nav: 'Perfumes',
    catalogs: [
      {
        name: 'Mujer',
        url: LINK_TO_PERFUMES_FOR_WOMEN,
      },
      {
        name: 'Hombre',
        url: LINK_TO_PERFUMES_FOR_MEN,
      },
      {
        name: 'Juveniles',
        url: LINK_TO_PERFUMES_FOR_YOUNG_PEOPLE,
      },
      {
        name: 'Nicho',
        url: LINK_TO_NICHE_PERFUMES,
      },
    ],
  },
  {
    id: 3,
    nav: 'Cremas',
    url: '/creams',
  },
  {
    id: 4,
    nav: 'Colonias',
    url: '/cologne',
  },
  {
    id: 5,
    nav: 'Cuidado Personal',
    url: '/personal-care',
  },
]

export { NAVBAR }
