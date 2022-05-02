// https://gist.github.com/paulirish/5558557
export const isLocalStorageAvailable = () => {
  try {
    if (!window.localStorage || localStorage === null || typeof localStorage === 'undefined') {
      return false;
    }
    localStorage.setItem('localStorage:test', 'value');
    if (localStorage.getItem('localStorage:test') !== 'value') {
      return false;
    }
    localStorage.removeItem('localStorage:test');
    return true;
  } catch {
    return false;
  }
}
