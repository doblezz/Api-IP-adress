const btnSearchIp = document.getElementById('search');
const ipserach = document.getElementById('ipsearch');
const version = document.querySelector('.version');
const location_ = document.querySelector('.location_');
const city = document.querySelector('.city');
const region_code = document.querySelector('.region_code');
const capital = document.querySelector('.capital');
const timezone = document.querySelector('.timezone');
const country_call = document.querySelector('.country_call');
const lenguages = document.querySelector('.lenguages');
const org = document.querySelector('.org');

btnSearchIp.addEventListener('click', () => {
    
    axios.get("https://ipapi.co/json/").then((response) => {
        if(response){
            var datos = response.data;
            ipserach.textContent = `IP: ${datos.ip}`;
            version.textContent = `Version: ${datos.version}`;
            location_.textContent = `Latitud: ${datos.latitude} / Longitud: ${datos.longitude}`
            city.textContent = `Ciudad: ${datos.city}`;
            region_code.textContent = `Pais: ${datos.country_name}, ${datos.country} -  ${datos.region_code}`;
            capital.textContent = `Capital: ${datos.country_capital}`;
            timezone.textContent = `Timezone: ${datos.timezone}`;
            country_call.textContent = `Codigo de llamada: ${datos.country_calling_code}`;
            lenguages.textContent = `Lenguages: ${datos.languages}`;
            org.textContent = `Org: ${datos.org}`;

            // detectar navegadir
            const browser = navigator.userAgent;
            console.log(browser)


        }
    });

});


