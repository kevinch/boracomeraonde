export const addPlace = (list, item) => {
  return list.concat(item)
}

export const generateId = () => {
  return Math.floor(Math.random()*100000)
}

export const removePlace = (list, id) => {
  const removeIndex = list.findIndex(item => item.id === id)
  return [
    ...list.slice(0, removeIndex),
    ...list.slice(removeIndex+1)
  ]
}
