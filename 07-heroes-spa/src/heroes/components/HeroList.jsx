import { getheroesByPublisher } from "../helpers"

export const HeroList = ({publisher}) => {
  const heroes = getheroesByPublisher(publisher);

  return (
    <ul>
      {heroes.map(hero => (
        <li>{hero.superhero}</li>
      ))}
    </ul>
  )
}
