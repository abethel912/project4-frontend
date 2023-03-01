import { Link, useLoaderData } from 'react-router-dom'

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
      <img src={card.img} className="recipe-image" alt="" />
      <h2>{card.cuisine}</h2>
      <p>Ingredients: {card.ingredients}</p>
      <p>Directions: {card.directions}</p>
      <p>Prep Time(Mins): {card.time}</p>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  )
}

export default Show
