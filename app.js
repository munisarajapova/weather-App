
let cityName = document.getElementById('cityName')
let tempur = document.getElementById('tempur')
let img = document.getElementById('img')

function getData (city){
    let request = new XMLHttpRequest()
    request.addEventListener('readystatechange', ()=>{
        if(request.readyState ==4){
            let data = JSON.parse(request.responseText)
            let tempn = Math.floor(data.main.temp)
            let name = data.name
            let icn = data.weather[0].icon

            tempur.textContent = `${tempn} °C`
            cityName.textContent= name
            img.innerHTML = `<img src=https://openweathermap.org/img/wn/${icn}@2x.png />`
        }
        else if (request.readyState ==1){
            console.log('loading..')

        }
    })
    request.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8381bde3b01a162ed81d52c0f43bb07d&units=metric`)
    request.send()
}
