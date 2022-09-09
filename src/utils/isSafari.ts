/**
 * Returns true if the browser user agent is Safari
 */
export default function isSafari() {
  if (typeof window === "undefined") {
    return false;
  }
  if (navigator.userAgent.indexOf("Chrome") > -1) {
    return false;
  }
  return navigator.userAgent.indexOf("Safari") > -1;
}
