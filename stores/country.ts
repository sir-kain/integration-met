import { defineStore } from "pinia";
import { countries } from "~/constants/country";
import type { Country } from "~/types/country";

type stateType = {
  activeCountry: Country;
  countries: Country[];
};

export const useCountryStore = defineStore("country", {
  state: (): stateType => {
    return {
      activeCountry: {
        code: "IT",
        name: "Italia",
      },
      countries,
    };
  },
  actions: {
    setActiveCountry(countryCode?: Country["code"]) {
      this.activeCountry = this.countries.find(
        (country) => country.code === (countryCode || "IT")
      )!;
    },

    purgeState() {
      //reset state?? on logout
    },
  },
  getters: {
    activeCountryCode: (state) => state.activeCountry.code,
    headerComponentName: (state) => {
      const countryCode = state.activeCountry.code;
      return `Header${countryCode.charAt(0).toUpperCase() + countryCode.slice(1).toLowerCase()
        }`;
    },
  },
});
