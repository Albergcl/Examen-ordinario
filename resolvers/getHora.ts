import { getCiudad } from "./getCiudad.ts";

export const getHora = async(ciudad: string): Promise<string> => {
    ciudad = await getCiudad();
    const URL = `https://api.api-ninjas.com/v1/worldtime?city=${ciudad}`;
    const data = await fetch(URL);

    const json = await data.json;
    return json.datetime;
}