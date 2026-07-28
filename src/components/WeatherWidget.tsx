import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Sun, Cloud, CloudRain, CloudLightning, Thermometer, Wind } from 'lucide-react';

interface WeatherWidgetProps {
  lang: Language;
}

interface WeatherData {
  temp: number;
  code: number;
  humidity: number;
  windSpeed: number;
}

export const WeatherWidget: React.FC<WeatherWidgetProps> = ({ lang }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchWeather() {
      try {
        // Mazamitla coordinates: 19.9167° N, 103.0167° W
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=19.9167&longitude=-103.0167&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=America%2FMexico_City'
        );
        if (res.ok) {
          const data = await res.json();
          if (data.current && isMounted) {
            setWeather({
              temp: Math.round(data.current.temperature_2m),
              code: data.current.weather_code,
              humidity: Math.round(data.current.relative_humidity_2m),
              windSpeed: Math.round(data.current.wind_speed_10m),
            });
          }
        }
      } catch (err) {
        console.warn('Weather fetch fallback to default Mazamitla estimate:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchWeather();
    const interval = setInterval(fetchWeather, 10 * 60 * 1000); // refresh every 10 min
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // Fallback defaults for Mazamitla mountain weather
  const currentTemp = weather ? weather.temp : 21;
  const currentCode = weather ? weather.code : 1;
  const currentWind = weather ? weather.windSpeed : 12;

  // Map WMO weather code to description and icon
  const getWeatherInfo = (code: number) => {
    if (code === 0) {
      return {
        label: lang === 'es' ? 'Despejado' : 'Clear Sky',
        icon: <Sun className="w-4 h-4 text-amber-400 animate-pulse" />,
        trailCondition: lang === 'es' ? 'Excelente tracción' : 'Ideal dry trail',
      };
    } else if ([1, 2, 3].includes(code)) {
      return {
        label: lang === 'es' ? 'Parcialmente Nublado' : 'Partly Cloudy',
        icon: <Cloud className="w-4 h-4 text-amber-200" />,
        trailCondition: lang === 'es' ? 'Clima fresco en pinar' : 'Perfect mountain breeze',
      };
    } else if ([45, 48].includes(code)) {
      return {
        label: lang === 'es' ? 'Neblina en Sierra' : 'Mountain Fog',
        icon: <Cloud className="w-4 h-4 text-slate-300" />,
        trailCondition: lang === 'es' ? 'Visibilidad mística' : 'Mystic misty Pines',
      };
    } else if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) {
      return {
        label: lang === 'es' ? 'Lluvia / Lodo Pro' : 'Mountain Rain',
        icon: <CloudRain className="w-4 h-4 text-cyan-400" />,
        trailCondition: lang === 'es' ? '¡Lodo épico activo!' : 'Epic mud action active!',
      };
    } else if ([95, 96, 99].includes(code)) {
      return {
        label: lang === 'es' ? 'Tormenta de Sierra' : 'Thunderstorm',
        icon: <CloudLightning className="w-4 h-4 text-amber-500" />,
        trailCondition: lang === 'es' ? 'Ruta de extrema adrenalina' : 'Hardcore extreme route',
      };
    } else {
      return {
        label: lang === 'es' ? 'Pinar Templado' : 'Mild Forest',
        icon: <Sun className="w-4 h-4 text-amber-400" />,
        trailCondition: lang === 'es' ? 'Condición perfecta' : 'Great trail status',
      };
    }
  };

  const info = getWeatherInfo(currentCode);

  return (
    <div
      className="group relative flex items-center gap-2 bg-[#1a1a1a]/80 hover:bg-[#252525] px-3 py-1.5 rounded-xl border border-white/10 shadow-inner transition-all cursor-pointer"
      title="Mazamitla, Jalisco Weather"
    >
      <div className="flex items-center gap-1.5">
        {info.icon}
        <span className="text-xs font-black text-white tracking-tight">{currentTemp}°C</span>
      </div>

      <div className="hidden xl:flex flex-col text-left leading-tight border-l border-white/10 pl-2">
        <span className="text-[10px] font-bold text-[#ff7a00] uppercase tracking-wider">
          Mazamitla
        </span>
        <span className="text-[10px] text-gray-300 font-medium truncate max-w-[100px]">
          {info.label}
        </span>
      </div>

      {/* Hover Dropdown / Tooltip details */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 p-3 bg-[#121212] border border-[#ff7a00]/30 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-50 text-left">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2">
          <span className="text-xs font-bold text-[#ff7a00] uppercase tracking-wider">
            {lang === 'es' ? 'Clima en Sierra' : 'Mountain Weather'}
          </span>
          <span className="text-[10px] font-semibold text-gray-400">Mazamitla, JAL</span>
        </div>

        <div className="space-y-1.5 text-xs text-gray-200">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1 text-gray-400 text-[11px]">
              <Thermometer className="w-3 h-3 text-[#ff7a00]" />
              {lang === 'es' ? 'Temperatura:' : 'Temp:'}
            </span>
            <span className="font-bold text-white">{currentTemp}°C</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1 text-gray-400 text-[11px]">
              <Wind className="w-3 h-3 text-cyan-400" />
              {lang === 'es' ? 'Viento:' : 'Wind:'}
            </span>
            <span className="font-bold text-white">{currentWind} km/h</span>
          </div>

          <div className="pt-1.5 border-t border-white/10 mt-1">
            <span className="text-[10px] text-[#ff7a00] font-semibold block">
              {lang === 'es' ? 'Estado de la Pista:' : 'Trail Condition:'}
            </span>
            <span className="text-[11px] font-medium text-emerald-400 block">
              {info.trailCondition}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
