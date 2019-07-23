import { isBrowser } from "./isBrowser";

export const clearSelection = () => {
  if (isBrowser() && window.getSelection) {
    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
    }
  }
};
