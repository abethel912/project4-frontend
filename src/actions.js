import { redirect } from 'react-router-dom'

// YOUR DEPLOYED API BASE URL
const URL = 'https://newproject4-backend.onrender.com'

//createAction => create a todo from form submissions to `/create`
export const createAction = async ({ request }) => {
  // get form data
  const formData = await request.formData()

  // construct request body
  const newRecipe = {
    name: formData.get('name'),
    img: formData.get('img'),
    cuisine: formData.get('cuisine'),
    ingredients: formData.get('ingredients'),
    directions: formData.get('directions'),
    time: formData.get('time')
  }

  // send request to backend
  await fetch(URL + '/recipes/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newRecipe)
  })

  // redirect back to index page
  return redirect('/')
}

//updateAction => update a todo from form submissions to `/update/:id`
export const updateAction = async ({ request, params }) => {
  // get form data
  const formData = await request.formData()

  // get todo id
  const id = params.id

  // construct request body
  const updatedRecipe = {
    name: formData.get('name'),
    img: formData.get('img'),
    cuisine: formData.get('cuisine'),
    ingredients: formData.get('ingredients'),
    directions: formData.get('directions'),
    time: formData.get('time'),
  }

  // send request to backend
  await fetch(URL + `/recipes/${id}/`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedRecipe)
  })

  // redirect back to show page page
  return redirect(`/${id}`)
}

//deleteAction => delete a todo from form submissions to `/delete/:id`
export const deleteAction = async ({ params }) => {
  // get todo id
  const id = params.id

  // send request to backend
  await fetch(URL + `/recipes/${id}/`, {
    method: 'delete'
  })

  // redirect back to show page page
  return redirect('/')
}
