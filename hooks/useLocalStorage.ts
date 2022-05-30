import { useEffect, useState } from "react";

const useLocalStorage = <S extends any>(key: string, initial: S) => {
  const [value, setValue] = useState<S>(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const saved = window.localStorage.getItem(key);
      if (saved !== null) {
        return JSON.parse(saved);
      }
    }
    return initial;
  });

  useEffect(() => {
    if (window.localStorage) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value]);

  return [value, setValue] as [typeof value, typeof setValue];
};

export default useLocalStorage;
