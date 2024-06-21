const apiKey=" e8787e679547406a9ff161257242106";
const apiUrl=" https://api.weatherapi.com/v1/current.json?key=e8787e679547406a9ff161257242106&q= ";
const searchBox= document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")
async function checkWeather(city){
    const response=await fetch(apiUrl +city+ `&appid=${apiKey}`);
    // if(response.status=404){
    //     document.querySelector(".error").style.display="block";
    //     document.querySelector(".weather").style.display="none";
    // }

    
    var data=await response.json();
    console.log(data);
    document.querySelector(".cityName").innerHTML=data.location.name;
    document.querySelector(".temp").innerHTML=Math.round(data.current.temp_c)+"°C";
    document.querySelector(".humidity").innerHTML=data.current.humidity+"%";
    document.querySelector(".wind-speed ").innerHTML=data.current.wind_kph+"km/h";
    if(data.current.condition.text=="Clouds"){
        weatherIcon.src="images/clouds.png"
    }

    else if(data.current.condition.text=="Clear"){
        weatherIcon.src="images/clear.png"
    }

    else if(data.current.condition.text==" Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }

    else if(data.current.condition.text=="Humidity"){
        weatherIcon.src="images/humidity.png"
    }

    else if(data.current.condition.text=="Mist"){
        weatherIcon.src="images/mist.png"
    }

    else if(data.current.condition.text=="Rain"){
        weatherIcon.src="images/rain.png"
    }

    else if(data.current.condition.text=="Snow"){
        weatherIcon.src="images/snow.png"
    }

    else if(data.current.condition.text=="Wind"){
        weatherIcon.src="images/wind.png"
    }



}

 

searchBtn.addEventListener("click",() => {
    checkWeather(searchBox.value);
  
}
)


 