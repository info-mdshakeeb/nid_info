import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...classList) {
  return twMerge(clsx(classList))
}

import { useEffect, useState } from "react";

export function useWindowSize() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 1024);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return isSmallScreen;
}