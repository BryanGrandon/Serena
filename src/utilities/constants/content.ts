import nichePerfumes from '../../content/perfumes/niche-perfumes.json'
import perfumesForMen from '../../content/perfumes/perfumes-for-men.json'
import perfumesForWomen from '../../content/perfumes/perfumes-for-women.json'
import perfumesForYoungPeople from '../../content/perfumes/perfumes-for-young-people.json'
import { addImageInContent } from '../scripts/add-image-in-content'

const PERFUMES = {
  men: {
    title: perfumesForMen.title,
    paragraph: perfumesForMen.paragraph,
    items: addImageInContent({ items: perfumesForMen.items, type: 'H' }),
  },
  women: {
    title: perfumesForWomen.title,
    paragraph: perfumesForWomen.paragraph,
    items: addImageInContent({ items: perfumesForWomen.items, type: 'F' }),
  },
  niche: {
    title: nichePerfumes.title,
    paragraph: nichePerfumes.paragraph,
    items: addImageInContent({ items: nichePerfumes.items, type: 'Q' }),
  },
  youngPeople: {
    title: perfumesForYoungPeople.title,
    paragraph: perfumesForYoungPeople.paragraph,
    items: perfumesForYoungPeople.items,
  },
}

const ALL_PERFUMES = [...PERFUMES.men.items, ...PERFUMES.women.items, ...PERFUMES.niche.items, ...perfumesForYoungPeople.items]

export { PERFUMES, ALL_PERFUMES }
