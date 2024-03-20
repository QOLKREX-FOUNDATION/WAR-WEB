import { createContext, useRef } from "react";

export const SlideContext = createContext();

export const SlideProvider = ({ children }) => {
  const swiperRef = useRef(null);

  return (
    <SlideContext.Provider value={{ swiperRef }}>
      {children}
    </SlideContext.Provider>
  );
};
