const copyToClipboard = (url: string) => {
  navigator.clipboard
    .writeText(url)

    .catch((err) => {
      console.error(err);
    });
};

export default copyToClipboard;
