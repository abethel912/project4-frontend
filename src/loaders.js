const URL = 'https://newproject4-backend.onrender.com'

export const indexLoader = async () => {
  const response = await fetch(URL + '/recipes/')
  const recipes = await response.json()
  return recipes
}

//showLoader => get a single todo for Show route
export const showLoader = async ({ params }) => {
  const response = await fetch(URL + `/recipes/${params.id}/`)
  const recipe = await response.json()
  return recipe
}
