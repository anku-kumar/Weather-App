async function getWeather(city){

    // const options = {method: 'GET', headers: {accept: 'application/json'}};
    const weather=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=77fec8297b7048408a9181542240406&q=${city}&days=5&aqi=no&alerts=no`)
    const res=await weather.json();
    // console.log(res)
    const location=res.location
    // console.log(location)
    const currentcond= res.current
    // console.log(currentcond)
    
    
    document.querySelector(".locationDetails").style.display="block"

    let citydetails=document.getElementById("city");
    citydetails.innerText=location.name

    let regiondetails=document.getElementById("region");
    regiondetails.innerText=location.region

    let countrydetails=document.getElementById("country");
    countrydetails.innerText=location.country

    document.querySelector(".tempDetails").style.display="block";
    

    let temperaturedetails=document.getElementById("temperatureDisplay");
    temperaturedetails.innerText=currentcond.temp_c;                                              
    
    const icon=currentcond.condition.icon;
    // console.log(icon);
    const logo=document.getElementById("logo")
    logo.src=icon;

    document.getElementById("weather-text").innerText=currentcond.condition.text;

    
    // "city:" + location.name +  "  region:" + location.region + 
    // "  country:" + location.country  + "  temp: " + currentcond.temp_c


    console.log(location.localtime)
    document.querySelector(".date-time").innerText=location.localtime




    document.querySelector(".forecast-container").style.display="flex"
    const forecast=res.forecast.forecastday;
    console.log(forecast[1])


    let box1Date=document.getElementById("box1-date")
    box1Date.innerText=forecast[1].date
    
    let box1Temp=document.getElementById("box1-temp")
    box1Temp.innerText=forecast[1].day.avgtemp_c
    
    document.getElementById("box1-icon").src=forecast[1].day.condition.icon


    let box2Date=document.getElementById("box2-date")
    box2Date.innerText=forecast[2].date
    
    let box2Temp=document.getElementById("box2-temp")
    box2Temp.innerText=forecast[2].day.avgtemp_c
    
    document.getElementById("box2-icon").src=forecast[2].day.condition.icon




    // let box3Date=document.getElementById("box3-date")
    // box3Date.innerText=forecast[3].date
    
    // let box3Temp=document.getElementById("box3-temp")
    // box3Temp.innerText=forecast[3].day.avgtemp_c
    
    // document.getElementById("box3-icon").src=forecast[3].day.condition.icon



    // let box4Date=document.getElementById("box4-date")
    // box4Date.innerText=forecast[4].date
    
    // let box4Temp=document.getElementById("box4-temp")
    // box4Temp.innerText=forecast[4].day.avgtemp_c
    
    // document.getElementById("box4-icon").src=forecast[4].day.condition.icon



    

}


function main(){

const search=document.getElementById("searchButton")
search.addEventListener("click",()=>{
    const cityName=document.getElementById("cityName-box").value

    getWeather(cityName)
})

}

main()