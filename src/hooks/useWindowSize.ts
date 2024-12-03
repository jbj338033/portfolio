import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // 디바운스 처리
    let timeoutId: number;
    const debouncedHandleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debouncedHandleResize);
    handleResize();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
