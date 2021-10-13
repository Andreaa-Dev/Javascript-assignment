// Your code here
class Country {
  constructor() {
    this.url = "https://restcountries.com/v3.1/all";
    this.nameUrl = " https://restcountries.com/v2/name/{name}?fullText=true";
    this.langUrl = " https://restcountries.com/v2/lang/{lang}";
  }

  async fetchData() {
    try {
      let response = await fetch(this.url);
      let data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async countryName(name) {
    let newUrl = this.nameUrl.replace("{name}", name);
    try {
      let response = await fetch(newUrl);
      let data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async borderCountry(item) {
    let country = await this.countryName(item);
    let border = country[0].borders;
    return border;
  }

  async languageFunc(lang) {
    let newUrl = this.langUrl.replace("{lang}", lang);
    try {
      let response = await fetch(newUrl);
      let data = await response.json();
      let langCountries = data.map((country) => {
        return country;
      });
      return langCountries;
    } catch (error) {
      console.log(error);
    }
  }

  async populationFunc(population) {
    let data = await this.fetchData();
    let filtered = data.filter((country) => country.population > population);
    let countryList = filtered.map((item) => {
      return item.name.common;
    });
    console.log(countryList, "name");
  }
}

const country = new Country();
country.countryName("Finland");
country.fetchData();
country.borderCountry("Finland");
country.languageFunc("es");
country.populationFunc(1000000);
