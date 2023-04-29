window.addEventListener('load', () => {

    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let vientoVelocidad = document.getElementById('viento-velocidad')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion => {
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4d646d119c475085f7dfa8f9a7a86956`
            fetch(url)
            .then(response => { return response.json() })
            .then( data => {
                let tempK = data.main.temp - 273.15
                let temp = Math.round(tempK)
                temperaturaValor.textContent = `Temperatura: ${temp} °C`

                let vientoms = data.wind.speed
                let vientokh = Math.round(vientoms * 3.6)
                vientoVelocidad.textContent = `Viento: ${vientokh} km/h`
            })
            .catch( error => {
                console.log(error)
            })
        })
    }
})