import { RefObject, useEffect } from "react";

const useCloseDropDown = <R extends HTMLElement, C extends Function>(
  ref: RefObject<R>,
  callback: C
) => {
  
  //close drop-down when click outside the box
  useEffect(() => {
    const clickOutSide = (e: MouseEvent) => {
      if (ref.current && (!ref.current.contains(e.target as Node))) callback();
    };

    window.addEventListener("click", clickOutSide, true);

    return () => window.removeEventListener("click", clickOutSide, true);
  }, [ref]);
};

export default useCloseDropDown;
