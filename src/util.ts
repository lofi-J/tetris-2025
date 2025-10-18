export const getCSSVariable = (key: string) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(key)
    .trim();
};
