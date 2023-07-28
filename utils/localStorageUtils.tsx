// Get data from local storage
export const getLocalStorageItem = (key: any) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error getting data from local storage:', error);
      return null;
    }
  };
  
  // Set data in local storage
  export const setLocalStorageItem = (key: any, value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting data in local storage:', error);
    }
  };
  
  // Remove data from local storage
  export const removeLocalStorageItem = (key: any) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data from local storage:', error);
    }
  };