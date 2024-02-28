import { defineStore } from "pinia";
import axios from "axios";

export const useLocationStore = defineStore("locationStore", {
  state: () => ({
    city: "toshkent",
    lat: "",
    lon: "",
    error: null,
  }),
  actions: {
    async fetchLocation(city) {
      try {
        if (!city) {
          throw new Error("City is not selected!");
        }

        const response = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=2593974dc29f26ca9157642339010606`
        );

        if (!response) {
          throw new Error(city);
        }

        const data = response.data;
        console.log('before: ',this.lat);
        this.lat = data[0].lat;
        console.log('after: ',this.lat);
        this.lon = data[0].lon;
        this.error = null;

        const weatherStore = useWeatherStore();
        await weatherStore.fetchWeather(this.lat, this.lon);
      } catch (error) {
        this.error = error.message;
        console.error(error);
      }
    },
  },
  watch: {
    city(newCity,oldCity) {
      console.log(`City changed from ${oldCity} to ${newCity}`);
    },
  },
});

export const useWeatherStore = defineStore("weatherStore", {
  state: () => ({
    weather: {},
    error: null,
  }),
  actions: {
    async fetchWeather(lat, lon) {
      try {
        if (!lat || !lon) {
          throw new Error("Latitude and longitude not found!");
        }

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=2593974dc29f26ca9157642339010606&units=metric&lang=ru`
        );

        this.weather = response.data;
        this.error = null;

        console.log(this.weather);
      } catch (error) {
        this.error = error.message;
        console.log(error);
      }
    },
  },
});
