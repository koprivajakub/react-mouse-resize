import {isBrowser} from "./isBrowser";

export const registerMouseMove = (addListener: boolean, functionCallback: (e: MouseEvent) => void) => {
  if (isBrowser()) {
    if (addListener) {
      window.addEventListener("mousemove", functionCallback);
    } else {
      window.removeEventListener("mousemove", functionCallback);
    }
  }
};
