import {z} from 'zod';

const weatherSchema = z.object({
  id: z.number(),
  name: z.string(),
  temp: z.number(),
  windSpeed: z.number(),
  humidity: z.number(),
  img: z.string()
})

export type WeatherType = z.infer<typeof weatherSchema>

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "fe01b830a41f9641f1e7b278098eef3b";

export async function getWeather(city: string): Promise<WeatherType | void> {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  if (!response.ok) {
    alert('Please enter a valid city name!!!!!!!!');
    throw new Error(`HTTP error! status: ${response.status}`)
    return;
  }
  

  const result: WeatherType = {
    id: data.id,
    name: data.name,
    temp: data.main.temp,
    windSpeed: data.wind.speed,
    humidity: data.main.humidity,
    img: data.weather[0].main
  }

 /* const dataResult = weatherSchema.array().safeParse(result);

  if(!dataResult.success) {
    throw new Error(`Invalid data: ${dataResult.error}`)
  }*/

  return result;
}