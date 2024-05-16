//Import
import StarshipCard from "./StarshipCard"; //Child Component

const StarshipLists = (props) => {
    const {filteredStarships} = props;

  return (
    <section>
      <h2>Starships</h2>
      <h4>Number of Results: {filteredStarships.length}</h4>

      <StarshipCard filteredStarships={filteredStarships}/>

    </section>
  )
}

export default StarshipLists;