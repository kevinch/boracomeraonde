export const addPlace = (list, item) => {
  return list.concat(item)
}

export const generateId = () => Math.floor(Math.random()*100000)
