import Card from '../components/Card'
import { useLoaderData } from 'react-router-dom'

const Index = (props) => {
  const recipes = useLoaderData()
  // For each post in the array render a Post component
  return recipes.map((card) => <Card card={card} key={card.id} />)
}

export default Index
