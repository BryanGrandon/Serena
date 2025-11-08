import { ALL_PERFUMES, CREAMS, PERFUMES } from './content'

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
  {
    category: 'creams',
    data: CREAMS,
  },
]

const createDynamicIdPerfumes = () => {
  let data = []
  const ids = ALL_PERFUMES.map((el) => el?.name.toLowerCase().split(' ').join('-'))

  for (let i = 0; i < ids.length; i++) {
    const regex = ids[i].match(/^(\w+)-([a-z])(\d{2})$/)[2]

    const newData = {
      category: regex == 'h' ? 'perfumes-for-men' : regex == 'f' ? 'perfumes-for-women' : regex == 'j' ? 'perfumes-for-young-people' : regex == 'q' ? 'niche-perfumes' : '',
      id: ids[i],
      data: ALL_PERFUMES[i],
    }
    data.push(newData)
  }
  return data
}

const createDynamicIdCreams = () => {
  let data = []
  const ids = CREAMS.items.map((el) => el?.name.toLowerCase().split(' ').join('-'))
  console.log(CREAMS)

  for (let i = 0; i < ids.length; i++) {
    const newData = {
      category: 'creams',
      id: ids[i],
      data: CREAMS.items[i],
    }
    data.push(newData)
  }
  return data
}

const IDS_PERFUMES = createDynamicIdPerfumes()
const IDS_CREAMS = createDynamicIdCreams()
const DYNAMIC_ID = [...IDS_PERFUMES, ...IDS_CREAMS]

export { DYNAMIC_PAGE, DYNAMIC_ID }
