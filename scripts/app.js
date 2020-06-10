const form = document.querySelector("body > div > form");
const input = document.querySelector("body > div > form > input[type=text]");
const details= document.querySelector(".details");

const updateUI = function(data){

    const cityDets = data.cityDets;
    const weather = data.weather;

    // update details template
    details.innerHTML = `
    <div class="details">
    <h5>${cityDets.Country.LocalizedName}</h5>
    <h5>${cityDets.EnglishName}</h5>
    <div>${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;
    // element.removeAttribute("style")
    // element.hasAttribute(name)


    // if (x.style.display === 'none') {
    //     x.style.display = 'block';
    //   } else {
    //     x.style.display = 'none';
    //   }

    // remove display none style if present
   if (details.style.display === "none"){
       details.style.display = "";
   }
    
}


// city: what the user types in
const updateCity = async function(city){

    // Calling fucntion from function.js
    // As getCity is an asyn fucntion we can use await 
    // ... to assign a value brfore cityDets is assigned a value
    const cityDets = await getCity(city);
    // city.Key: is an object about the weather
    const weather = await getWeather(cityDets.Key);

    // return object
    // data thats returned
    return {
        cityDets: cityDets,
        weather: weather
    };
};



form.addEventListener("submit", function(e){
    e.preventDefault();

    // get city value
    const city = form.city.value.trim();
    form.reset();
    
    // update the ui with new city
    // Calling update city function
    // city: What the user types in
    // updateCity function is an async func so therfore it return a promise
    updateCity(city).then(function(data){
        updateUI(data) && console.log(data);
    }).catch(function(err){
        console.log(err);
    });
});
