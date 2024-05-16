//Import
import StarshipCard from "./StarshipCard"; //Child Component

const StarshipLists = (props) => {
    const {filteredStarships} = props;

  return (
    <section>
    <h2>Starships</h2>
    <h4>Number of Results: {filteredStarships.length}</h4>
      {/* <ul>
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
    </ul> */}

    <StarshipCard filteredStarships={filteredStarships}/>

  </section>
  )
}

export default StarshipLists;