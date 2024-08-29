import type { Country } from "~/types/country";

const countries: Country[] = [
  {
    code: 'IT',
    name: 'Italia'
  },
  {
    code: 'FR',
    name: 'France'
  },
] as const


export { countries }