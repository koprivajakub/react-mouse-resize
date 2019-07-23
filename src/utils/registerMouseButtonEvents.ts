import {isBrowser} from "./isBrowser";

export const registerMouseButtonEvents = (isEnabled: boolean, mouseDownFunction: (e: MouseEvent) => void, mouseUpFunction: (e: MouseEvent) => void) => {
  if (!isEnabled) {
    return;
  }
  window.addEventListener("mousedown", mouseDownFunction);
  window.addEventListener("mouseup", mouseUpFunction);

  return () => {
    if (isBrowser()) {
      window.removeEventListener("mousedown", mouseDownFunction);
      window.removeEventListener("mouseup", mouseUpFunction);
    }
  };
};
