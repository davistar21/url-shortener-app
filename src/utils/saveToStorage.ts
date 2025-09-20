const saveLinksToLocalStorage = (longUrls: string[], shortUrls: string[]) => {
  const links = {
    longUrls,
    shortUrls,
  };

  localStorage.setItem("links", JSON.stringify(links));
};

export default saveLinksToLocalStorage;
