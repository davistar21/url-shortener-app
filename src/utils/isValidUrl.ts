const isValidUrl = (url: string) => {
  const regex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
  return regex.test(url);
};

export default isValidUrl;
