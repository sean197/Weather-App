// Reference to API KEY
// Whenever we make a request (API calls) we need the API key
// ... in order for app to know who is making the requests
const key = "cR7dJDIKhMiolcyPz7qH726zkFdqL0CX";

// Get City Location
const getCity = async function(city){

    // API key will make request to this URL
    // Current Conditions URL to get the exact location user types in
    // when making request to london...
    //url: "url: "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=cR7dJDIKhMiolcyPz7qH726zkFdqL0CX&q=london""
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";

    // Query parameters needed are the apikey and the location 
    const query = `?apikey=${key}&q=${city}`;

    // await is used as we're going to wait until the promise is resolved
    // fetch returns a promise
    const response = await fetch(base + query);

    const data = await response.json();

    // Data returns JSON objects: string of objects
    // data[0] is the most precise city match for user input
    return data[0];
}

const getWeather = async function(id){

    //     "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/current-weather/328328?lang=en-us"


    const base = "http://dataservice.accuweather.com/currentconditions/v1/";

    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);

    const data = await response.json();

    return data[0];

}



// getCity("london").then(function(data){
//     return getWeather(data.Key);
// }).then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })