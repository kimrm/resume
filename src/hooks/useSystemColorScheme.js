import { useEffect, useState } from "react";

export function useSystemColorScheme() {
  const [systemColorScheme, setSystemColorScheme] = useState(
    getInitialSystemColorScheme()
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (event) => {
      setSystemColorScheme(event.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", listener);
    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  useEffect(() => {
    if (systemColorScheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    console.log("systemColorScheme", systemColorScheme);
  }, [systemColorScheme]);

  function getInitialSystemColorScheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  const toggleColorScheme = () => {
    setSystemColorScheme((prevScheme) =>
      prevScheme === "dark" ? "light" : "dark"
    );
  };

  return { systemColorScheme, toggleColorScheme };
}
