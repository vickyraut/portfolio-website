import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    const handle = requestAnimationFrame(() => {
      setMatches(matchMedia.matches);
    });

    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    matchMedia.addEventListener("change", handleChange);
    return () => {
      cancelAnimationFrame(handle);
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}
