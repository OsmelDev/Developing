import { useState, useRef } from 'react';

export const useHandleScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();
  const ITEM_WIDTH = 1400;

  const handleScroll = (scrollAmount) => {
    //calcula la posicion del nuevo scroll
    let calc = scrollPosition + scrollAmount;
    let newScrollPosition = calc;
    //setear el estado  con la posicion del nuevo scroll
    setScrollPosition(newScrollPosition);

    if (newScrollPosition > '5500') {
      newScrollPosition = calc * 0;
      setScrollPosition(newScrollPosition);
    }
    //accede al elemento contenedor y cambia la propiedad scrollLeft de este
    containerRef.current.scrollLeft = newScrollPosition;

    return handleScroll;
  };

  return { handleScroll, containerRef, ITEM_WIDTH };
};
