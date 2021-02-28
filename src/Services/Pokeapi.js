import axios from "axios"


export const getPoke  = async () => await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")

