//Import
import {useState} from "react";

const StarshipSearch = (props) => {
    const {starships, setFilteredStarships} = props;

    //State
    const [input, setInput] = useState("");

    //Functions
    const handleInputChange = (event) => {
        setInput(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
 
        const filtered = starships.filter((starship)=>{return starship.name.toLowerCase().includes(input.toLowerCase())});
     
        setFilteredStarships(filtered); 
      };

      const handleReset = () => {
        setFilteredStarships(starships);
        setInput("");
      };

  return (
    <div className="starship-search">
        <h2>Search</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Search Name:</label>
          <input id="search" type="text" value={input} onChange={handleInputChange} />
          <button type="submit">Search</button>
          <button onClick={handleReset}>Reset</button>
        </form>
      </div>
  )
}

export default StarshipSearch;