import { useState, useEffect } from "react";

export function PageHeight() {
  const [pageHeight, setPageHeight] = useState(() => window.innerHeight);

  useEffect(() => {
    const updateHeight = () => {
      setPageHeight(window.innerHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return pageHeight;
}