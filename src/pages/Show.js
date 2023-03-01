import { Link, useLoaderData, Form } from 'react-router-dom'

// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const card = useLoaderData()

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: 'center',
    border: '3px solid green',
    width: '80%',
    margin: '30px auto'
  }

  return (
    <div style={div}>
      <h1>{card.name}</h1>
      <h2>{card.cuisine}</h2>
      <div style={{ textAlign: 'center' }}>
        <h2>Create a Recipe</h2>
        <Form action={`/create/${card.id}`} method="post">
          <input
            type="text"
            name="name"
            placeholder="recipe"
            defaultValue={card.name}
          />
          <input
            type="text"
            name="image"
            placeholder="image URL"
            defaultValue={card.img}
          />
          <input
            type="text"
            name="cuisine"
            placeholder="cuisine"
            defaultValue={card.cuisine}
          />
          <input
            type="text"
            name="ingredients"
            placeholder="ingredients"
            defaultValue={card.ingredients}
          />
          <input
            type="text"
            name="directions"
            placeholder="directions"
            defaultValue={card.directions}
          />
          <input
            type="text"
            name="time"
            placeholder="time"
            defaultValue={card.time}
          />
          <button>Update Recipe</button>
        </Form>
        <Form action={`/delete/${card.id}`} method="post">
          <button>Delete Recipe</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  )
}

export default Show
