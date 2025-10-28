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
    category: 'perfumes-for-women',
    data: createObject(perfumesForWomen),
  },
  {
    category: 'perfumes-for-men',
    data: createObject(perfumesForMen),
  },
  {
    category: 'perfumes-for-young-people',
    data: createObject(perfumesForYoungPeople),
  },
  {
    category: 'niche-perfumes',
    data: createObject(nichePerfumes),
  },
]

const createDynamicId = () => {
  let data = []
  const idMen = perfumesForMen.items.map((el) => el.name.toLowerCase().split(' ').join('-'))
  const idWomen = perfumesForWomen.items.map((el) => el.name.toLowerCase().split(' ').join('-'))
  const idNiche = nichePerfumes.items.map((el) => el.name.toLowerCase().split(' ').join('-'))
  const idYoung = perfumesForYoungPeople.items.map((el) => el.name.toLowerCase().split(' ').join('-'))

  for (let i = 0; i < idMen.length; i++) {
    const newData = {
      category: 'perfumes-for-men',
      id: idMen[i],
      data: perfumesForMen.items[i],
    }
    data.push(newData)
  }

  for (let i = 0; i < idWomen.length; i++) {
    const newData = {
      category: 'perfumes-for-women',
      id: idWomen[i],
      data: perfumesForMen.items[i],
    }
    data.push(newData)
  }

  for (let i = 0; i < idNiche.length; i++) {
    const newData = {
      category: 'niche-perfumes',
      id: idNiche[i],
      data: nichePerfumes.items[i],
    }
    data.push(newData)
  }

  for (let i = 0; i < idYoung.length; i++) {
    const newData = {
      category: 'perfumes-for-young-people',
      id: idYoung[i],
      data: perfumesForYoungPeople.items[i],
    }
    data.push(newData)
  }
  return data
}

const DYNAMIC_ID = createDynamicId()

export { DYNAMIC_PAGE, DYNAMIC_ID }
