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

  return (
    <>
    <main>
      <h1>Star Wars API</h1>

      {/* We can send our state setter functions via props to child components to help with "lifting state" */}
      <StarshipSearch starships={starships} setFilteredStarships={setFilteredStarships}/>

      <StarshipLists filteredStarships={filteredStarships} />

      </main>
    </>
   
  );
}

export default App;
