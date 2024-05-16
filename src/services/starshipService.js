//Starships URL
const BASE_URL = "https://swapi.dev/api/starships/";

//Function

const fetchStarships = async () =>{
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data.results)
        //NOTE: Ensure to "return" the data fetched from the API, so we can use the value when we import it to our component
        return data.results; //The ACTUAL data with the array of starships is from the property "results", so need to target that array with "data.results"
    }catch(error){
        console.log("Error, Please try again");
    }
};

fetchStarships();

export {fetchStarships};