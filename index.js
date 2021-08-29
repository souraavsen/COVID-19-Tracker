const searched = document.getElementById("search");
const goBtn = document.getElementById("go");
const country = document.getElementById("country");
const flag = document.getElementById("flag");
const cases = document.getElementById("cases");
const deaths = document.getElementById("deaths");
const recovered = document.getElementById("recovered");
const tests = document.getElementById("tests");
const title = document.getElementById("title");

goBtn.addEventListener("click", function () {
  fetch(`https://corona.lmao.ninja/v2/countries/${searched.value}`)
    .then((response) => response.json())
    .then((result) => injectData(result));
});

function injectData(data) {
  console.log(data);
  if (
    data.message == "Country not found or doesn't have any cases"
  ) {
    country.innerText = "Country not found or doesn't have any cases.";
    cases.innerText = "";
    flag.style.display = "none";
    deaths.innerText = "";
    recovered.innerText = "";
    tests.innerText = "";
  } else if (data.length > 1 || searched.value == "") {
    country.innerText = "Search using the name of the country.";
    flag.style.display = "none";
    cases.innerText = "";
    deaths.innerText = "";
    recovered.innerText = "";
    tests.innerText = "";
  } else {
    country.innerHTML = "Covid-19 Situation for " + data.country;
    flag.src = data.countryInfo.flag;
    flag.style.display = "block";
    cases.innerText = data.cases;
    deaths.innerText = data.deaths;
    recovered.innerText = data.recovered;
    tests.innerText = data.tests;
  }
}
