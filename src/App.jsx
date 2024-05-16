//Import
import {useState, useEffect} from "react";
import * as StarshipList from "./services/starshipService";
const {fetchStarships} = StarshipList;
import "./App.css";
import StarshipLists from "./components/StarshipLists"; //Child Component
import StarshipSearch from "./components/StarshipSearch"; //Child Component

//Parent Component
const App = () => {
  
  //State
  const [starships, setStarships] = useState([]);
    //Creating a second state variable helps with the search feature because we WON"T loose the original data fetched from the API when we try to filter it out during the search feature - This way, we still have access to the original full data (which we can use for our comparison in the filter/search feature since it will contain all the data) fetched from the API and we can render the "filteredStarships" state variable and change it however we want based on user input without ACTUALLY filtering out the original data and having to refetch
  const [filteredStarships, setFilteredStarships] = useState([]);
  // const [input, setInput] = useState("");

  //Using the useEffect() Hook to handle the side effect like fetching data from an API
  useEffect(()=>{
      const fetchData = async () => {
      const data = await fetchStarships(); //In order to FETCH the data, we need to invoke the function HERE (because we only declared it in the /services/starshipService.js file) INSIDE another asynchronous function (fetchData() in this example) and capture the data inside a variable (In this case we stored it in "data")
      setStarships(data); //We UPDATE state by using the state setter function to the data we just captured from the API
      setFilteredStarships(data); //This is the state variable data we will use to render because we will be filtering it out during the search feature (Helps with separation of concerns - full data still available via the other state variable "starships")
    };
    fetchData();
  }, []); //Empty array as the optional dependency array in the useEffect() Hook, which is the second argument - Empty array ensures that the side effect function runs only ONCE after the initial render

  //Functions
  // const handleInputChange = (event) => {
  //   setInput(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   //Here, we are filtering out a new array based on starship name (user input with starship name in data) - to ensure capitalization is not an issue, we can use .toLowerCase() on both values of comparison to convert everything to lowercase and the ".includes" will match if anything in the starship.name value is included with whatever is being typed in the input field (If input field is s, it will filter anything with the letter s - so starship names with at least one s will show up) - Also, NOTE how we create a variable that will hold the FILTERED array of starships by using the "starships" state variable which we are NOT rendering (it only serves the purpose of containing the full fetched data from the API intact, so we can use it like this)
  //   const filtered = starships.filter((starship)=>{return starship.name.toLowerCase().includes(input.toLowerCase())}); //I learned about .toLowerCase() and .includes() from Chat GPT - I was having an issue with the search feature where I wanted to make it more user friendly and not worry about case-sensitivity, include any special characaters, and include spaces
 
  //   setFilteredStarships(filtered); //Updating state for the ACTUAL state variable we are using to render and manipulate state (we don't have to worry about refetching the data from the API again after changing its state because our FALLBACK is the other state variable that contains the full fetched data intact)
  // }

  // const handleReset = () => {
  //   //Here, because we have TWO state variables dealing with the array of spaceships - our full data that we DO NOT touch in terms of filtering, removing, adding is still intact and we can reference it like so, to reset and display ALL starships after the other state variable that is actually being rendered on the application is updated 
  //   setFilteredStarships(starships);
  //   setInput("");
  // }


  return (
    <>
    <main>
      <h1>Star Wars API</h1>

      <StarshipSearch starships={starships} setFilteredStarships={setFilteredStarships}/>

      {/* <div className="starship-search">
        <h2>Search</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Search Name:</label>
          <input id="search" type="text" value={input} onChange={handleInputChange} />
          <button type="submit">Search</button>
          <button onClick={handleReset}>Reset</button>
        </form>
      </div> */}

      {/* <section>
        <h2>Starships</h2>
        <h4>Number of Results: {filteredStarships.length}</h4>
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
      </section> */}

      <StarshipLists filteredStarships={filteredStarships} />

      </main>
    </>
   
  );
}

export default App;
