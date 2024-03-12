import { useEffect } from "react";

export function useQueryParam({ language }) {
  useEffect(() => {
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set("lang", language);
    var newUrl =
      language === "en"
        ? window.location.pathname + "?" + searchParams.toString()
        : window.location.pathname;

    history.pushState({ path: newUrl }, "", newUrl);
  }, [language]);
}
