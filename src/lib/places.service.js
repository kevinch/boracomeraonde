const baseUrl = 'http://localhost:8080/places'

export const loadPlaces = () => {
  return fetch(baseUrl)
    .then(res => res.json())
}
