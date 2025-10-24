import nichePerfumes from '../../content/perfumes/niche-perfumes.json'
import perfumesForMen from '../../content/perfumes/perfumes-for-men.json'
import perfumesForWomen from '../../content/perfumes/perfumes-for-women.json'
import perfumesForYoungPeople from '../../content/perfumes/perfumes-for-young-people.json'

const DYNAMIC_PAGE = [
  {
    linkName: 'perfumes-for-women',
    data: perfumesForWomen,
  },
  {
    linkName: 'perfumes-for-men',
    data: perfumesForMen,
  },
  {
    linkName: 'perfumes-for-young-people',
    data: perfumesForYoungPeople,
  },
  {
    linkName: 'niche-perfumes',
    data: nichePerfumes,
  },
]

export { DYNAMIC_PAGE }
