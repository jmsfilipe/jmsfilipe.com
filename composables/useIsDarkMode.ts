export function useIsDarkMode() {
  const colorMode = useColorMode();
  return computed({
    get() {
      return colorMode.value === "dark";
    },
    set() {
      colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
  });
}
