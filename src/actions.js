import { redirect } from 'react-router-dom'


const URL = 'https://newproject4-backend.onrender.com'

export const createAction = async ({ request }) => {
  const formData = await request.formData()

  const newRecipe = {
    name: formData.get('name'),
    img: formData.get('img'),
    cuisine: formData.get('cuisine'),
    ingredients: formData.get('ingredients'),
    directions: formData.get('directions'),
    time: formData.get('time')
  }

  
  await fetch(URL + '/recipes/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newRecipe)
  })
  return redirect('/')
}


export const updateAction = async ({ request, params }) => {
  const formData = await request.formData()
  const id = params.id
  const updatedRecipe = {
    name: formData.get('name'),
    img: formData.get('img'),
    cuisine: formData.get('cuisine'),
    ingredients: formData.get('ingredients'),
    directions: formData.get('directions'),
    time: formData.get('time')
  }

  // send request to backend
  let res = await fetch(URL + `/recipes/${id}/`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedRecipe)
  })
console.log(res)
  return redirect(`/${id}`)
}


export const deleteAction = async ({ params }) => {
  
  const id = params.id
  await fetch(URL + `/recipes/${id}/`, {
    method: 'delete'
  })

 
  return redirect('/')
}
