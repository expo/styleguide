// https://gist.github.com/paulirish/5558557
export const isLocalStorageAvailable = () => {
  try {
    if (!window.localStorage || typeof window.localStorage === 'undefined') {
      return false;
    }
    window.localStorage.setItem('localStorage:test', 'value');
    if (window.localStorage.getItem('localStorage:test') !== 'value') {
      return false;
    }
    window.localStorage.removeItem('localStorage:test');
    return true;
  } catch {
    return false;
  }
}
