import { useEffect, useCallback, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useTheme = () => {
  const [localTheme, setLocalTheme] = useLocalStorage<string>("theme", "light");
  //prevent hydration
  const [theme, setTheme] = useState("light")

  const darkTheme = useCallback(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    setLocalTheme("dark");
  }, []);

  const lightTheme = useCallback(() => {
    document.documentElement.removeAttribute("data-theme");
    setLocalTheme("light");
  }, []);

  //set theme
  useEffect(() => {
    //prevent hydration
    setTheme(localTheme)

    if (localTheme === "dark") {
      darkTheme();
    } else {
      lightTheme();
    }
  }, [darkTheme, lightTheme, localTheme]);


  return { theme, lightTheme, darkTheme };
};

export default useTheme;
