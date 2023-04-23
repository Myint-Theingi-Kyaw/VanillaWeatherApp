function showDate(time){
    let days=[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day=days[currentTime.getDay()];
    let hours=currentTime.getHours();
    if(hours<10){
        hours=`0${hours}`;
    }
    let minutes=currentTime.getMinutes();
    if(minutes<10){
        minutes=`0${minutes}`;
    }
    return`${day} ${hours}:${minutes}`;
    
    }
    
    let currentTime = new Date();
    let timeElement=document.querySelector("#date");
    timeElement.innerHTML=showDate(currentTime);
    
    function showTemperature(response){
     document.querySelector("#city-name").innerHTML=response.data.name;
    
      celsiusTemperature = response.data.main.temp;
     document.querySelector("#temp").innerHTML=Math.round(celsiusTemperature);
    
     let humidityElement=document.querySelector("#humidity");
     humidityElement.innerHTML=`Humidity : ${response.data.main.humidity}%`;
    
    let windElement=document.querySelector("#wind");
    windElement.innerHTML=`Wind : ${response.data.wind.speed}Km/h`;
    
    document.querySelector("#descri").innerHTML = response.data.weather[0].description;
    let iconElement=document.querySelector("#icon");
    iconElement.setAttribute("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`); 
    }
    
    function showPosition(event){
        event.preventDefault();
    let apiKey = "4d2c1bb3fb6e6c93ebaf9e2d8816b5ae";
    let cityName = document.querySelector("#forming").value;
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(showTemperature);
    }
    let searching=document.querySelector("#search");
    searching.addEventListener("click",showPosition);
    let celsiusTemperature = null;
    
    function displayTemperatureFahrenheit(event){
        event.preventDefault();
        let fahrenheitDegree=document.querySelector("#temp");
        fahrenheitDegree.innerHTML=Math.round((celsiusTemperature * 9) / 5 + 32);
    }
    let fahrenheitTemperature=document.querySelector("#flink");
    fahrenheitTemperature.addEventListener("click",displayTemperatureFahrenheit);
    
    
    function displayTemperatureCelsius(event){
        event.preventDefault();
        let celsiusDegree=document.querySelector("#temp");
        celsiusDegree.innerHTML=Math.round(celsiusTemperature);
    }
    
    let celsiusTemperatureChange=document.querySelector("#clink");
    celsiusTemperatureChange.addEventListener("click",displayTemperatureCelsius)
    search("New York");