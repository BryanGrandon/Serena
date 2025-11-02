import nichePerfumes from '../../content/perfumes/niche-perfumes.json'
import perfumesForMen from '../../content/perfumes/perfumes-for-men.json'
import perfumesForWomen from '../../content/perfumes/perfumes-for-women.json'
import perfumesForYoungPeople from '../../content/perfumes/perfumes-for-young-people.json'
import { addMoreInfo } from '../scripts/add-more-info'

const PERFUMES = {
  men: {
    title: perfumesForMen.title,
    paragraph: perfumesForMen.paragraph,
    items: addMoreInfo({ items: perfumesForMen.items, type: 'H' }),
  },
  women: {
    title: perfumesForWomen.title,
    paragraph: perfumesForWomen.paragraph,
    items: addMoreInfo({ items: perfumesForWomen.items, type: 'F' }),
  },
  niche: {
    title: nichePerfumes.title,
    paragraph: nichePerfumes.paragraph,
    items: addMoreInfo({ items: nichePerfumes.items, type: 'Q' }),
  },
  youngPeople: {
    title: perfumesForYoungPeople.title,
    paragraph: perfumesForYoungPeople.paragraph,
    items: addMoreInfo({ items: perfumesForYoungPeople.items, type: 'J' }),
  },
}

const ALL_PERFUMES = [...PERFUMES.men.items, ...PERFUMES.women.items, ...PERFUMES.niche.items, ...perfumesForYoungPeople.items]

export { PERFUMES, ALL_PERFUMES }
