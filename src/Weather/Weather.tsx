import React, { use, useEffect, useState } from 'react';
import searchIcon from '../assets/images/search.png';
import Clouds from '../assets/images/clouds.png';
import Rain from '../assets/images/rain.png';
import Clear from '../assets/images/clear.png';
import Drizzle from '../assets/images/drizzle.png';
import Mist from '../assets/images/mist.png';
import humidityImg from '../assets/images/humidity.png';
import windSpeedImg from '../assets/images/wind.png';
import { getWeather, type WeatherType } from '../Data/apiWeatherList';


function Weather() {
  const [input, setInput] = useState<string>('');
  const [weatherInfo, setWeatherInfo] = useState<WeatherType | null>(null)

  const searchHandler = async () => {
    console.log('clicked');
    console.log(input);
    const result = await getWeather(input);
    if (result) setWeatherInfo(result);
    console.log(result);
  }

 /* useEffect(() => {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        searchHandler();
        return
      }
    });

    document.removeEventListener('keydown', searchHandler);
  }, [input])*/
  

  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#10172e]'>
      <div className='bg-linear-to-r from-cyan-500 to-blue-500 w-[450px] h-[600px] rounded-2xl p-[40px]'>
        <div className='flex w-full gap-2'>
          <input type="search" value={input} className='flex-1 bg-white py-3 px-5 outline-0 text-black rounded-3xl' onChange={(e) => setInput(e.target.value)} placeholder='Search'/>
          <button onClick={() => {searchHandler()}} type='button' className='w-[50px] bg-white flex items-center justify-center rounded-full'><img src={searchIcon} alt="" width='20'/></button>
        </div>

        <div className='flex items-center flex-col gap-[20px] mb-[60px]'>
          <img src={weatherInfo?.img === 'Clear' ? Clear : weatherInfo?.img === 'Clouds' ? Clouds : weatherInfo?.img === 'Drizzle' ? Drizzle : weatherInfo?.img === 'Mist' ? Mist : weatherInfo?.img === 'Rain' ? Rain : Clouds} alt="" />

          <p className='text-3xl font-bold'>{weatherInfo ? weatherInfo.temp : '0'}°C</p>

          <p className='text-4xl font-bold'>{weatherInfo ? weatherInfo.name : 'Unknown'}</p>
        </div>

        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <img src={humidityImg} alt="" width='40'/>

            <div className='text-[18px] font-semibold'>
              <p>{weatherInfo ? weatherInfo.humidity : '0'}%</p>
              <p>Humidity</p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <img src={windSpeedImg} alt="" width='40'/>
            
            <div className='text-[18px] font-semibold'>
              <p>{weatherInfo ? weatherInfo.windSpeed : '0'}km/h</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
