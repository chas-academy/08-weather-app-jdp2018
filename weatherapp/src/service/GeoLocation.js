const getLocation = (callback, error) => navigator.geolocation.getCurrentPosition(callback, error);
export default {getLocation}
