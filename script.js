
// https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=ff531d957faadd6b15f5c205e5e3ca19&units=metric
const apiKey = "ff531d957faadd6b15f5c205e5e3ca19"

setInterval(() => {
    const date = new Date()
    document.querySelector('#date').innerHTML = date.toDateString()
    document.querySelector('#time').innerHTML = date.toLocaleTimeString()
},1000)

const search = document.querySelector('.search-bar')
search.addEventListener(('click'),(e) => {
    const city = new String(document.querySelector('#city-name').value)

    document.querySelector('#city').innerHTML = city.toUpperCase()
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    async function currentWeather(){
        try {
            let response = await fetch(url)
            let data = await response.json()
            console.log(`Response : ${data}`);

            //temperature, humidity and windspeed
            let t = document.querySelector('#temp').innerHTML = parseInt(data.main.temp)
            document.querySelector('#humidity').innerHTML = parseInt(data.main.humidity)
            document.querySelector('#wind').innerHTML = parseInt(data.wind.speed)

            //Weather Icon
            /*
            Above 30°C: Use the clear icon for sunny weather.
            20°C to 30°C: Use the clouds icon for cloudy weather.
            15°C to 20°C: Use the drizzle icon for light rain.
            10°C to 15°C: Use the mist icon for misty conditions.
            5°C to 10°C: Use the rain icon for moderate to heavy rain.
            Below 5°C: Use the snow icon if precipitation is present.
            */

            if(t>30){
                document.querySelector('#weatherIcon').setAttribute('src', `./images/clear.png`)
            } else if(t > 20 && t <= 30){
                document.querySelector('#weatherIcon').setAttribute('src', `./images/clouds.png`)
            } else if(t > 15 && t <= 20){
                document.querySelector('#weatherIcon').setAttribute('src', `./images/drizzle.png`)
            } else if(t > 10 && t <= 15){
                document.querySelector('#weatherIcon').setAttribute('src', `./images/mist.png`)
            } else if(t > 5 && t <= 10){
                document.querySelector('#weatherIcon').setAttribute('src', `./images/rain.png`)
            } else{
                document.querySelector('#weatherIcon').setAttribute('src', `./images/snow.png`)
            }

        } catch (error) {
            console.log(error);
        }
    }
    currentWeather()
    
    
})
