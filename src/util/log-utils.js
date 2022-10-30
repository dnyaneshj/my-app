const isLoggeEnabled = () => localStorage.getItem("abc");
export const logInfo = (...props) => {
   isLoggeEnabled() && console.info(props);
}
export const logError = (...props) => {
   isLoggeEnabled() && console.error(props);
}
export const logWarning = (...props) => {
   isLoggeEnabled && console.warn(props);
}
export const logDebug = (...props) => {
   isLoggeEnabled && console.debug(props);
}
