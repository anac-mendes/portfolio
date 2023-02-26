const openLink = (event, destination, context) => {
  if (event.ctrlKey || event.metaKey) {
    window.open(destination, "_blank");
  } else {
    context(destination);
  }
};

export default openLink;
