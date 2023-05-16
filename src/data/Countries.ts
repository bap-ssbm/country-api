import { reactive } from "vue";


export interface CountryType {
  name: {
    common: string;
    official: string;
    nativeName: {
      bis: {
        official: string;
        common: string;
        nld:string;
      };
    };
  };
  borders:string[];
  cioc:string;
  cca3:string;
  tld: string[];
  currencies: any;
  region: string;
  subregion: string;
  capital: string[];
  languages: any;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}

const countriesData = reactive({
  countries: [] as CountryType[],
});

await fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => {
    countriesData.countries = data;
  });



export default countriesData;