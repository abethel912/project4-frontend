import Card from '../components/Card'
import { useLoaderData } from 'react-router-dom'
import { Form } from 'react-router-dom'

const Index = (props) => {
  const recipes = useLoaderData()
  // For each post in the array render a Post component
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h2>Create a Recipe</h2>
        <Form action="/create" method="post">
          <input type="text" name="name" placeholder="recipe" />
          <input type="text" name="img" placeholder="URL here" />
          <input type="text" alt="" name="cuisine" placeholder="cuisine" />
          <input
            type="text"
            alt=""
            name="ingredients"
            placeholder="ingredients"
          />
          <input
            type="text"
            alt=""
            name="directions"
            placeholder="directions"
          />
          <input
            type="text"
            alt=""
            name="time"
            placeholder="prep time (mins)"
          />
          <button>Create New Recipe</button>
        </Form>
      </div>
      {recipes.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </>
  )
}

export default Index
