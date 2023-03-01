import { Link } from 'react-router-dom'

//destructure the post from props
const Card = ({ card }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: 'center',
    border: '3px solid',
    margin: '10px auto',
    width: '80%'
  }
  return (
    <div style={div}>
      <Link to={`/${card.id}`}>
        <h1>Recipe:{card.name}</h1>
      </Link>
      <img src={card.img} className="recipe-image" />
      <p>Cuisine: {card.cuisine}</p>
      <p>Ingredients: {card.ingredients}</p>
      <p>Directions: {card.directions}</p>
      <p>Prep Time(Mins) {card.time}</p>
    </div>
  )
}

export default Card
