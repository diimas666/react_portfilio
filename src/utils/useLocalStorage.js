import { useState } from 'react';

export function useLocalStorage(key, defaultValue) {
  const getStorageValue = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    if (!saved) {
      return defaultValue; // Если значение отсутствует, возвращаем значение по умолчанию
    }

    try {
      return JSON.parse(saved); // Пробуем распарсить значение
    } catch (error) {
      console.error(`Error parsing JSON from localStorage for key "${key}":`, error);
      return defaultValue; // Если парсинг не удался, возвращаем значение по умолчанию
    }
  };

  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}
