const elList = document.querySelector("ul");
const API = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.open("GET", API);
xhr.send();

let countries = [];

xhr.addEventListener("readystatechange", function () {
  // console.log(xhr.status, xhr.readyState);
  if (this.readyState === 4 && xhr.status === 200) {
    // console.log(xhr.responseText);
    // console.log(JSON.parse(xhr.responseText));

    countries = JSON.parse(xhr.responseText);
    console.log(countries);
    countries.map((country) => {
      // console.log(country);

      elList.innerHTML += `
            <li class="country-item">
                <img class="country-flag" src=${country.flags.png} alt='${country.name.common} flag'>
                <h3 class="js-title">${country.name.common}</h3>
                <p class="js-text"><b>Population:</b> ${country.population}</p>
                <p class="js-text"><b>Region:</b> ${country.region}</p>
            </li>
        `;
    });
  }
});

// dark mode

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode', darkModeToggle.checked);
});

// Check the user's preferred color scheme and set initial mode
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
darkModeToggle.checked = prefersDarkMode;

body.classList.toggle('dark-mode', prefersDarkMode);

