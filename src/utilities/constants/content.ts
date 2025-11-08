import nichePerfumes from '../../content/perfumes/niche-perfumes.json'
import perfumesForMen from '../../content/perfumes/perfumes-for-men.json'
import perfumesForWomen from '../../content/perfumes/perfumes-for-women.json'
import perfumesForYoungPeople from '../../content/perfumes/perfumes-for-young-people.json'
import creams from '../../content/creams.json'
import { addMoreInfo } from '../scripts/add-more-info'

const PERFUMES = {
  men: {
    title: perfumesForMen.title,
    paragraph: perfumesForMen.paragraph,
    items: addMoreInfo({ items: perfumesForMen.items, type: 'perfumes', option: 'H' }),
  },
  women: {
    title: perfumesForWomen.title,
    paragraph: perfumesForWomen.paragraph,
    items: addMoreInfo({ items: perfumesForWomen.items, type: 'perfumes', option: 'F' }),
  },
  niche: {
    title: nichePerfumes.title,
    paragraph: nichePerfumes.paragraph,
    items: addMoreInfo({ items: nichePerfumes.items, type: 'perfumes', option: 'Q' }),
  },
  youngPeople: {
    title: perfumesForYoungPeople.title,
    paragraph: perfumesForYoungPeople.paragraph,
    items: addMoreInfo({ items: perfumesForYoungPeople.items, type: 'perfumes', option: 'J' }),
  },
}
const ALL_PERFUMES = [...PERFUMES.men.items, ...PERFUMES.women.items, ...PERFUMES.niche.items, ...perfumesForYoungPeople.items]

const CREAMS = {
  title: creams.title,
  paragraph: creams.paragraph,
  items: addMoreInfo({ items: creams.items, type: 'creams', option: '' }),
}

export { PERFUMES, ALL_PERFUMES, CREAMS }
