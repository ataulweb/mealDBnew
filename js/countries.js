const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    const countryContainer = document.getElementById('countries-container')
    countries.forEach(country =>{
    
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
        <h4>Country Name: ${country.name. common}</h4>
        <p>Capital: ${country.capital? country.capital[0]:'No Capital'}</p>
        <p>Language: ${country.languages? country.languages.eng:'Others'}</p>
        <p>Area: ${country.area}</p>
        <p>Sub Region: ${country.subregion}</p>

        <button onclick="loadCountriesDetails('${country.cca2}')">Details</button>
        `
        countryContainer.appendChild(countryDiv);
    })
}

const loadCountriesDetails = (code) =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountriesDetail(data[0]))

}

const displayCountriesDetail = country =>{
    console.log(country)
    const displayCountryDetail = document.getElementById('country-detail')
    displayCountryDetail.innerHTML =`
    <h4>Details: ${country.name.common}</h4>
    <img src="${country.flags.png}" alt="" />
    `
}
loadCountries();