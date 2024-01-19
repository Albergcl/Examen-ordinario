export const getCiudad = async(tlf: string): Promise<string> => {
    const URL = `https://api.api-ninjas.com/v1/validatephone?number=${tlf}`;
    const data = await fetch(URL);

    const json = await data.json;
    return json.location;
}