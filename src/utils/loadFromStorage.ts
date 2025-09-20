const loadLinksFromLocalStorage = () => {
  const savedLinks = JSON.parse(localStorage.getItem("links") || "[]");
  return savedLinks;
};

export default loadLinksFromLocalStorage;
