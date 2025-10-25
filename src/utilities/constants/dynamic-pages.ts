import nichePerfumes from '../../content/perfumes/niche-perfumes.json'
import perfumesForMen from '../../content/perfumes/perfumes-for-men.json'
import perfumesForWomen from '../../content/perfumes/perfumes-for-women.json'
import perfumesForYoungPeople from '../../content/perfumes/perfumes-for-young-people.json'

const createObject = (info: any) => {
  const data = {
    title: info.title,
    paragraph: info.paragraph,
    items: info.items,
  }
  return data
}

const DYNAMIC_PAGE = [
  {
    linkName: 'perfumes-for-women',
    data: createObject(perfumesForWomen),
  },
  {
    linkName: 'perfumes-for-men',
    data: createObject(perfumesForMen),
  },
  {
    linkName: 'perfumes-for-young-people',
    data: createObject(perfumesForYoungPeople),
  },
  {
    linkName: 'niche-perfumes',
    data: createObject(nichePerfumes),
  },
]

export { DYNAMIC_PAGE }
