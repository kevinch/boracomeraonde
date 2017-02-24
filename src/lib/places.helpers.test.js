import { addPlace, removePlace } from './places.helpers'

test('addPlace should add the passed place to the list', () => {
  const startList = [
    {id: 1, name: 'one', location: 'str'},
    {id: 2, name: 'two', location: 'str'}
  ]
  const newPlace = {id: 3, name: 'three', location: 'str'}
  const expected = [
    {id: 1, name: 'one', location: 'str'},
    {id: 2, name: 'two', location: 'str'},
    {id: 3, name: 'three', location: 'str'}
  ]

  const result = addPlace(startList, newPlace)

  expect(result).toEqual(expected)
})

test('addPlace should not mutate the existing places array', () => {
  const startList = [
    {id: 1, name: 'one', location: 'str'},
    {id: 2, name: 'two', location: 'str'}
  ]
  const newPlace = {id: 3, name: 'three', location: 'str'}
  const expected = [
    {id: 1, name: 'one', location: 'str'},
    {id: 2, name: 'two', location: 'str'},
    {id: 3, name: 'three', location: 'str'}
  ]

  const result = addPlace(startList, newPlace)

  expect(result).not.toEqual(startList)
})

test('removePlace should remove a place by id', () => {
  const startList = [
    {id: 1, name: 'one', location: 'str'},
    {id: 2, name: 'two', location: 'str'}
  ]
  const targetId = 2
  const expectedList = [
    {id: 1, name: 'one', location: 'str'}
  ]

  const result = removePlace(startList, targetId)

  expect(result).toEqual(expectedList)
})
