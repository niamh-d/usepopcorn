import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      const controller = new AbortController();
      document.addEventListener(
        "keydown",
        function (e) {
          if (e.code.toLowerCase() === key.toLowerCase()) action();
        },
        { signal: controller.signal }
      );
      return function () {
        controller.abort();
      };
    },
    [action, key]
  );
}
