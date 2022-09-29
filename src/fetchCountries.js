//Напиши функцію fetchCountries(name),яка робить HTTP-запит на ресурс name
// і повертає проміс з масивом країн - результатом запиту. 
//Винеси її в окремий файл fetchCountries.js 
//і зроби іменований експорт.


export { fetchCountries };

function fetchCountries(nameCountry) {
    return fetch(`https://restcountries.com/v3.1/name/${nameCountry}?fields=name,capital,population,flags,languages`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error => console.log(`${error.name}: ${error.message}`));
  }