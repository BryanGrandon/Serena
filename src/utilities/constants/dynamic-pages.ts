import { ALL_PERFUMES, PERFUMES } from './content'

const DYNAMIC_PAGE = [
  {
    category: 'perfumes-for-women',
    data: PERFUMES.women,
  },
  {
    category: 'perfumes-for-men',
    data: PERFUMES.men,
  },
  {
    category: 'perfumes-for-young-people',
    data: PERFUMES.youngPeople,
  },
  {
    category: 'niche-perfumes',
    data: PERFUMES.niche,
  },
]

const createDynamicId = () => {
  let data = []
  const ids = ALL_PERFUMES.map((el) => el?.name.toLowerCase().split(' ').join('-'))

  for (let i = 0; i < ids.length; i++) {
    const newData = {
      category: 'perfumes-for-men',
      id: ids[i],
      data: ALL_PERFUMES[i],
    }
    data.push(newData)
  }

  return data
}

const DYNAMIC_ID = createDynamicId()

export { DYNAMIC_PAGE, DYNAMIC_ID }
