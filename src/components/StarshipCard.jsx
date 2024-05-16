
const StarshipCard = (props) => {
    const {filteredStarships} = props;

  return (
    <ul>
      {filteredStarships.map((starship, index)=>{
        return (
          <li key={index}>
            <h3>{starship.name}</h3>
            <h4>Class: {starship.starship_class}</h4>
            <h4>Manufacturer: {starship.manufacturer}</h4>
            <h4>Model: {starship.model}</h4>
          </li>
        )
      })}
    </ul>
  )
}

export default StarshipCard;