import { useEffect } from "react";

const useCloseDropDown = (ref: any, callback: Function) => {

  //close drop-down when click outside the box
  useEffect(() => {
    const clickOutSide = (e: MouseEvent) => {
      if (!ref?.current?.contains(e.target)) callback();
    };

    window.addEventListener("click", clickOutSide, true);   

    return () => window.removeEventListener("click", clickOutSide, true);
  }, [ref]);
};

export default useCloseDropDown;
